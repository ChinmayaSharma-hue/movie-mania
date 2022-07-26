from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework.permissions import IsAuthenticated
from .movieSerializer import movieSerializer
from .profileSerializer import profileSerializer
from .searchProfileSerializer import searchProfileSerializer
from .demoSerializer import demoSerializer
from .models import Movie
from .models import MovieProfile
from .models import SearchProfile
from .models import Demo

# Create your views here.
@api_view(["GET"])
def apiOverview(request):
    api_urls = {
        "List": "/task-list/",
        "Detail View": "/task-detail/<str:pk>/",
        "Create": "/task-create/",
        "Update": "/task-update/<str:pk>/",
        "Delete": "/task-delete/<str:pk>/",
    }
    return Response(api_urls)


@api_view(["GET"])
def movieList(request):
    movies = Movie.objects.all()
    serializer = movieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def movieDetail(request):
    movie = MovieProfile.objects.all()
    serializer = profileSerializer(movie, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def searchProfileDetail(request):
    movie = SearchProfile.objects.all()
    serializer = searchProfileSerializer(movie, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def userSpecific(request):
    uS = request.user.Demo.all()
    serializer = demoSerializer(uS, many=True)
    serializer.save(owner=request.user)
    return Response(serializer.data)

