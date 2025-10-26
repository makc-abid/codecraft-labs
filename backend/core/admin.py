from django.contrib import admin
from .models import Service, TeamMember, Project, Testimonial, Page, ContactMessage

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title','icon','created')

@admin.register(TeamMember)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name','role','created')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title','created')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name','role','created')

@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('slug','title','updated')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name','email','created')
    readonly_fields = ('name','email','phone','message','created','updated')
