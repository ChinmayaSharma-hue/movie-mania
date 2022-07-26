from pyexpat import model
from rest_framework import serializers
from .models import Demo


class demoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demo
        fields = "__all__"

