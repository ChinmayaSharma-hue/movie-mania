import React from "react";
import MovieCard from "./MovieCard";
import "../stylesheets/MoviesBoard.css";


export default function MoviesBoard({ movies }) {
    let movieCards = movies.map(movie => {
        return <MovieCard poster={"https://image.tmdb.org/t/p/original" + movie.posterPath}
            title={movie.title} releaseDate={movie.releaseDate} genre={movie.genre} id={movie.movie_id} />
    })
    return (
        <div className="movies-board">
            {movieCards}
        </div>

    )
}