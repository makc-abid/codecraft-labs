#!/bin/bash
set -e

### ====== CONFIG ======
REPO_URL="https://github.com/makc-abid/codecraft-labs.git"
PROJECT_SLUG="codecraft-labs"             # folder name under /var/www
DOMAIN_WWW="www.teamcodecraft.com"
DOMAIN_APEX="teamcodecraft.com"

DJANGO_APP="codecraft_api"                # Django settings package (has settings.py)
REACT_DIR_NAME="frontend"                 # React app folder name in repo root

PYBIN="python3"
NODEPKG="nodejs npm"                      # will use Ubuntu repo
NGINX_SITE="/etc/nginx/sites-available/${PROJECT_SLUG}.conf"
GUNICORN_SVC="/etc/systemd/system/gunicorn-${PROJECT_SLUG}.service"
SOCKET_PATH="/run/gunicorn-${PROJECT_SLUG}.sock"

echo "==> 🚀 Deploying ${PROJECT_SLUG} for ${DOMAIN_WWW}"

### ====== OS UPDATE & PACKAGES ======
apt update && apt -y upgrade
apt -y install $PYBIN-venv $PYBIN-pip git nginx curl ufw $NODEPKG

### ====== FETCH SOURCE ======
mkdir -p /var/www
cd /var/www
if [ -d "${PROJECT_SLUG}" ]; then
  echo "==> Repo folder exists. Pulling latest..."
  cd "${PROJECT_SLUG}"
  git pull --rebase || true
else
  echo "==> Cloning fresh repo..."
  git clone "${REPO_URL}" "${PROJECT_SLUG}"
  cd "${PROJECT_SLUG}"
fi

REPO_ROOT="$(pwd)"

### ====== LOCATE DJANGO manage.py (auto-detect) ======
echo "==> Detecting Django manage.py..."
MANAGE_DIR=""
# common candidates
for d in "." "backend" "server" "api" "${DJANGO_APP}"; do
  if [ -f "${REPO_ROOT}/${d}/manage.py" ]; then
    MANAGE_DIR="${REPO_ROOT}/${d}"
    break
  fi
done

if [ -z "$MANAGE_DIR" ]; then
  # fallback: recursive find
  FOUND=$(find "${REPO_ROOT}" -maxdepth 3 -type f -name manage.py | head -n1 || true)
  if [ -n "$FOUND" ]; then
    MANAGE_DIR="$(dirname "$FOUND")"
  fi
fi

if [ -z "$MANAGE_DIR" ]; then
  echo "❌ Could not find manage.py. Please verify repo structure."
  exit 1
fi

echo "==> Django manage.py directory: ${MANAGE_DIR}"

### ====== PYTHON VENV & REQUIREMENTS ======
cd "$MANAGE_DIR"
if [ ! -d "venv" ]; then
  $PYBIN -m venv venv
fi
source venv/bin/activate
pip install --upgrade pip wheel setuptools
if [ -f "${MANAGE_DIR}/requirements.txt" ]; then
  pip install -r requirements.txt
else
  echo "⚠️ requirements.txt not found; installing common prod deps"
  pip install gunicorn django
fi

### ====== DJANGO SETTINGS PATCH (ALLOWED_HOSTS, STATIC_ROOT) ======
SETTINGS_PATH="${MANAGE_DIR}/${DJANGO_APP}/settings.py"
if [ ! -f "$SETTINGS_PATH" ]; then
  echo "❌ ${SETTINGS_PATH} not found. Check DJANGO_APP name."
  exit 1
fi

# Ensure DEBUG=False
if grep -q "DEBUG = True" "$SETTINGS_PATH"; then
  sed -i "s/DEBUG = True/DEBUG = False/g" "$SETTINGS_PATH"
fi

# Ensure ALLOWED_HOSTS contains domains
if grep -q "ALLOWED_HOSTS" "$SETTINGS_PATH"; then
  python - <<PY
from pathlib import Path
p = Path("$SETTINGS_PATH")
s = p.read_text()
import re, json
hosts = ["${DOMAIN_WWW}", "${DOMAIN_APEX}", "127.0.0.1", "localhost"]
def repl(m):
    return "ALLOWED_HOSTS = " + repr(hosts)
s = re.sub(r"ALLOWED_HOSTS\s*=\s*\[.*?\]", repl, s, flags=re.S)
p.write_text(s)
print("Patched ALLOWED_HOSTS ->", hosts)
PY
else
  echo -e "\nALLOWED_HOSTS = ['${DOMAIN_WWW}', '${DOMAIN_APEX}', '127.0.0.1', 'localhost']" >> "$SETTINGS_PATH"
fi

# Ensure STATIC_ROOT exists
if ! grep -q "STATIC_ROOT" "$SETTINGS_PATH"; then
  echo -e "\nfrom pathlib import Path\nBASE_DIR = Path(__file__).resolve().parent.parent\nSTATIC_ROOT = BASE_DIR / 'staticfiles'\n" >> "$SETTINGS_PATH"
fi

### ====== DB MIGRATION & STATIC ======
python manage.py migrate --noinput
python manage.py collectstatic --noinput

### ====== REACT BUILD (served by Nginx) ======
FRONTEND_DIR="${REPO_ROOT}/${REACT_DIR_NAME}"
BUILD_DIR="${FRONTEND_DIR}/build"
if [ -d "$FRONTEND_DIR" ] && [ -f "${FRONTEND_DIR}/package.json" ]; then
  echo "==> Building React app..."
  cd "$FRONTEND_DIR"
  npm install
  npm run build
else
  echo "⚠️ React folder not found at ${FRONTEND_DIR} — skipping build."
fi

### ====== GUNICORN SYSTEMD (Unix socket) ======
cat > "$GUNICORN_SVC" <<EOF
[Unit]
Description=Gunicorn for ${PROJECT_SLUG}
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=${MANAGE_DIR}
Environment="PATH=${MANAGE_DIR}/venv/bin"
ExecStart=${MANAGE_DIR}/venv/bin/gunicorn --workers 3 --timeout 60 --bind unix:${SOCKET_PATH} ${DJANGO_APP}.wsgi:application
Restart=always

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now "gunicorn-${PROJECT_SLUG}.service"

### ====== NGINX CONFIG (SPA on /, Django on /api & /admin, static at /static) ======
cat > "$NGINX_SITE" <<'EOF'
server {
    listen 80;
    server_name DOMAIN_WWW DOMAIN_APEX;

    # Serve React build
    root /var/www/PROJECT_SLUG/REACT_DIR/build;
    index index.html;

    # Static files collected by Django
    location /static/ {
        alias MANAGE_DIR/staticfiles/;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Proxy Django app (change /api/ if your API prefix differs)
    location /api/ {
        proxy_pass http://unix:SOCKET_PATH;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_redirect off;
    }

    # Django admin (optional)
    location /admin/ {
        proxy_pass http://unix:SOCKET_PATH;
        proxy_set_header Host $host;
EOF

sed -i "s|PROJECT_SLUG|${PROJECT_SLUG}|g" "$NGINX_SITE"
sed -i "s|REACT_DIR|${REACT_DIR_NAME}|g" "$NGINX_SITE"
sed -i "s|MANAGE_DIR|${MANAGE_DIR}|g" "$NGINX_SITE"
sed -i "s|SOCKET_PATH|${SOCKET_PATH}|g" "$NGINX_SITE"

ln -sf "$NGINX_SITE" /etc/nginx/sites-enabled/${PROJECT_SLUG}.conf
# remove default site if exists
if [ -f /etc/nginx/sites-enabled/default ]; then
  rm -f /etc/nginx/sites-enabled/default
fi
nginx -t
systemctl restart nginx

### ====== FIREWALL ======
ufw allow 'Nginx Full' || true
ufw allow OpenSSH || true
ufw --force enable || true

### ====== SSL (Let's Encrypt) ======
apt -y install certbot python3-certbot-nginx
certbot --nginx -d "${DOMAIN_APEX}" -d "${DOMAIN_WWW}" --agree-tos -m admin@"${DOMAIN_APEX}" --no-eff-email
# Substitute placeholders
sed -i "s|DOMAIN_WWW|${DOMAIN_WWW}|g" "$NGINX_SITE"

echo "✅ All done!"
echo "🌐 Visit: https://${DOMAIN_WWW}"
sed -i "s|DOMAIN_APEX|${DOMAIN_APEX}|g" "$NGINX_SITE"
        proxy_set_header X-Real-IP $remote_addr;

}
    }

    client_max_body_size 20M;
    # React SPA fallback
    location / {
        try_files $uri /index.html;

