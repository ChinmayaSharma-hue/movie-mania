from django.urls import path
from . import views

urlpatterns = [
    path("", views.apiOverview, name="api-overview"),
    path("movie-list/", views.movieList, name="movie-list"),
    path("movie-detail/", views.movieDetail, name="movie-detail"),
    path(
        "search-profile-detail/",
        views.searchProfileDetail,
        name="search-profile-detail",
    ),
]
