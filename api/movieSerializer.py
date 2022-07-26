from pyexpat import model
from rest_framework import serializers
from .models import Movie


class movieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"

