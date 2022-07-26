from pyexpat import model
from rest_framework import serializers
from .models import MovieProfile


class profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieProfile
        fields = "__all__"

