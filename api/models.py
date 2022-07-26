from pyexpat import model
from unicodedata import category
from django.db import models
import jsonfield

# Create your models here.
class Movie(models.Model):
    movie_id = models.IntegerField(null=True)
    title = models.CharField(max_length=200)
    posterPath = models.TextField()
    releaseDate = models.TextField()
    category = models.TextField(default="None")
    genre = models.TextField(default="[]")


class SearchProfile(models.Model):
    movie_id = models.IntegerField(null=True)
    title = models.CharField(max_length=200)
    posterPath = models.TextField()
    releaseDate = models.TextField(null=True)
    cast_and_crew = models.JSONField(default=dict)


class MovieProfile(models.Model):
    title = models.CharField(max_length=200)
    posterPath = models.TextField()
    releaseDate = models.TextField(null=True)
    synopsis = models.TextField(null=True)
    reviews = models.JSONField(default=dict)
    cast_and_crew = models.JSONField(default=dict)


class Demo(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ForeignKey(
        "auth.User", related_name="demos", on_delete=models.CASCADE
    )
