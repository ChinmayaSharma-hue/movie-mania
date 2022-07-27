from pyexpat import model
from rest_framework import serializers
from .models import SearchProfile


class searchProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchProfile
        fields = "__all__"

