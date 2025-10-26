# Codecraft Labs Backend (Django + DRF)

## Quickstart (Dev with SQLite)
```bash
cd backend
python -m venv venv && source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Switch to MySQL (Production-friendly)
- Create a database `codecraftlabs` and user with password.
- Update `.env` with your MySQL credentials.
- Install system deps for `mysqlclient` if needed.
- Run `python manage.py migrate`.
