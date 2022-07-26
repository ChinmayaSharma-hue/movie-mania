from unittest import result
from django.shortcuts import render
import requests
from urllib3 import HTTPResponse
from api.models import Movie
from api.models import MovieProfile
from api.models import SearchProfile
from django.shortcuts import redirect
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow import keras


# Put your api key here
api_key = "881f6eb3c09910233d3dcb3618c372d7"

# Create your views here.


def home(request):
    SearchProfile.objects.all().delete()
    try:
        searchInput = request.GET["searchInput"]
        response = requests.get(
            "https://api.themoviedb.org/3/search/movie?api_key="
            + api_key
            + "&language=en-US&query="
            + searchInput
            + "&page=1&include_adult=false"
        )
        movieDetails = response.json()
        movieDetails = movieDetails["results"]
        for i in range(len(movieDetails)):
            movieID = movieDetails[i]["id"]
            response = requests.get(
                "https://api.themoviedb.org/3/movie/"
                + str(movieID)
                + "/credits?api_key="
                + api_key
                + "&language=en-US"
            )
            cast_and_crew = response.json()
            SearchProfile.objects.create(
                movie_id=movieDetails[i]["id"],
                title=movieDetails[i]["title"],
                posterPath=movieDetails[i]["poster_path"],
                releaseDate=movieDetails[i]["release_date"],
                cast_and_crew=cast_and_crew,
            )
    except:
        pass
    return render(request, "index.html")


def movies(request, category):
    cat_to_api = {
        "Popular Films": "https://api.themoviedb.org/3/discover/movie?api_key=881f6eb3c09910233d3dcb3618c372d7&popular=true",
        "Top Rated Films": "https://api.themoviedb.org/3/movie/top_rated?api_key=881f6eb3c09910233d3dcb3618c372d7&language=en-US&page=1",
        "In Theaters": "https://api.themoviedb.org/3/movie/now_playing?api_key=881f6eb3c09910233d3dcb3618c372d7&language=en-US&page=1",
    }
    Movie.objects.all().delete()
    SearchProfile.objects.all().delete()
    response = requests.get(cat_to_api[category])
    responseJSON = response.json()
    responseResults = responseJSON["results"]
    for i in range(len(responseResults)):
        Movie.objects.create(
            movie_id=responseResults[i]["id"],
            title=responseResults[i]["title"],
            posterPath=responseResults[i]["poster_path"],
            releaseDate=responseResults[i]["release_date"],
            genre=responseResults[i]["genre_ids"],
            category=f"{category}",
        )

    try:
        searchInput = request.GET["searchInput"]
        response = requests.get(
            "https://api.themoviedb.org/3/search/movie?api_key="
            + api_key
            + "&language=en-US&query="
            + searchInput
            + "&page=1&include_adult=false"
        )
        movieDetails = response.json()
        movieDetails = movieDetails["results"]
        for i in range(len(movieDetails)):
            movieID = movieDetails[i]["id"]
            response = requests.get(
                "https://api.themoviedb.org/3/movie/"
                + str(movieID)
                + "/credits?api_key="
                + api_key
                + "&language=en-US"
            )
            cast_and_crew = response.json()
            SearchProfile.objects.create(
                movie_id=movieDetails[i]["id"],
                title=movieDetails[i]["title"],
                posterPath=movieDetails[i]["poster_path"],
                releaseDate=movieDetails[i]["release_date"],
                cast_and_crew=cast_and_crew,
            )
    except:
        pass
    return render(request, "index.html")


def movieProfile(request, movie_id):
    SearchProfile.objects.all().delete()
    MovieProfile.objects.all().delete()
    response = requests.get(
        "https://api.themoviedb.org/3/movie/"
        + str(movie_id)
        + "?api_key="
        + api_key
        + "&language=en-US"
    )
    movieDetails = response.json()
    response = requests.get(
        "https://api.themoviedb.org/3/movie/"
        + str(movie_id)
        + "/credits?api_key="
        + api_key
        + "&language=en-US"
    )
    cast_and_crew = response.json()
    response = requests.get(
        "https://api.themoviedb.org/3/movie/"
        + str(movie_id)
        + "/reviews?api_key="
        + api_key
        + "&language=en-US&page=1"
    )
    reviews = response.json()

    data = list()
    for i in range(len(reviews["results"])):
        data.append(reviews["results"][i]["content"])

    model = keras.models.load_model("model.h5")

    with open("tokenizer.pkl", "rb") as f:  # jupyter notebook saved
        tokenizer = pickle.load(f)
    data_sequences = tokenizer.texts_to_sequences(data)
    max_length = 120
    trunc_type = "post"
    data_padded = pad_sequences(
        data_sequences, maxlen=max_length, truncating=trunc_type
    )
    if len(data_padded) > 0:
        sentiment = model.predict(data_padded)

        for i in range(len(reviews["results"])):
            reviews["results"][i]["sentiment"] = str(sentiment[i][0])
    else:
        for i in range(len(reviews["results"])):
            reviews["results"][i]["sentiment"] = "0"

    MovieProfile.objects.create(
        title=movieDetails["title"],
        posterPath=movieDetails["poster_path"],
        releaseDate=movieDetails["release_date"],
        synopsis=movieDetails["overview"],
        reviews=reviews,
        cast_and_crew=cast_and_crew,
    )

    try:
        searchInput = request.GET["searchInput"]
        response = requests.get(
            "https://api.themoviedb.org/3/search/movie?api_key="
            + api_key
            + "&language=en-US&query="
            + searchInput
            + "&page=1&include_adult=false"
        )
        movieDetails = response.json()
        movieDetails = movieDetails["results"]
        for i in range(len(movieDetails)):
            movieID = movieDetails[i]["id"]
            response = requests.get(
                "https://api.themoviedb.org/3/movie/"
                + str(movieID)
                + "/credits?api_key="
                + api_key
                + "&language=en-US"
            )
            cast_and_crew = response.json()
            SearchProfile.objects.create(
                movie_id=movieDetails[i]["id"],
                title=movieDetails[i]["title"],
                posterPath=movieDetails[i]["poster_path"],
                releaseDate=movieDetails[i]["release_date"],
                cast_and_crew=cast_and_crew,
            )
    except:
        pass
    return render(request, "index.html")


def signupPage(request):
    return render(request, "index.html")


def loginPage(request):
    return render(request, "index.html")


def logoutPage(request):
    return render(request, "index.html")
