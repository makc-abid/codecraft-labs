from django.db import models

class Timestamped(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True

class Service(Timestamped):
    title = models.CharField(max_length=120)
    description = models.TextField()
    icon = models.CharField(max_length=64, blank=True)  # e.g., 'code', 'palette'

    def __str__(self):
        return self.title

class TeamMember(Timestamped):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    photo_url = models.URLField(blank=True, null= True)
    bio = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} - {self.role}"

class Project(Timestamped):
    title = models.CharField(max_length=150)
    description = models.TextField()
    image_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    repo_url = models.URLField(blank=True)
    tags = models.CharField(max_length=200, blank=True)  # comma-separated

    def __str__(self):
        return self.title

class Testimonial(Timestamped):
    name = models.CharField(max_length=120)
    role = models.CharField(max_length=120, blank=True)
    quote = models.TextField()
    avatar_url = models.URLField(blank=True)

    def __str__(self):
        return f"{self.name}: {self.quote[:30]}..."

class Page(Timestamped):
    slug = models.SlugField(unique=True)  # 'about'
    title = models.CharField(max_length=150)
    content = models.TextField()

    def __str__(self):
        return self.slug

class ContactMessage(Timestamped):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
