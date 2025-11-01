from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Service, TeamMember, Project, Testimonial, Page, ContactMessage
from .serializers import (
    ServiceSerializer, TeamMemberSerializer, ProjectSerializer,
    TestimonialSerializer, PageSerializer, ContactMessageSerializer
)





class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by('-created')
    serializer_class = ServiceSerializer
    parser_classes = (MultiPartParser, FormParser)

class TeamViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('name')
    serializer_class = TeamMemberSerializer
    parser_classes = (MultiPartParser, FormParser)
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created')
    serializer_class = ProjectSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by('-created')
    serializer_class = TestimonialSerializer

class PageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    lookup_field = 'slug'

class ContactMessageViewSet(viewsets.GenericViewSet):
    queryset = ContactMessage.objects.all().order_by('-created')
    serializer_class = ContactMessageSerializer

    @action(detail=False, methods=['post'])
    def submit(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
