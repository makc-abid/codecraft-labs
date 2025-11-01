from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from .views import (
    ServiceViewSet, TeamViewSet, ProjectViewSet,
    TestimonialViewSet, PageViewSet, ContactMessageViewSet
)

router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'team', TeamViewSet, basename='team')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'pages', PageViewSet, basename='page')
router.register(r'contact', ContactMessageViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]