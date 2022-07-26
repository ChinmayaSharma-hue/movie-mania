import React from "react";
import twbb from "../images/there-will-be-blood.jpg"
import { useNavigate } from "react-router-dom";
import "../stylesheets/MovieCard.css";

export default function MovieCard({ poster, title, releaseDate, genre, id }) {
    const navigate = useNavigate();

    const navigateToMovie = () => {
        // 👇️ navigate to /contacts
        window.location.href = `/check/${id}`;
    };

    let Months = {
        1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July",
        8: "August", 9: "September", 10: "October", 11: "November", 12: "December"
    }
    let month = parseInt(releaseDate.slice(5, 7))
    let year = parseInt(releaseDate.slice(0, 4))
    let day = parseInt(releaseDate.slice(8, 10))

    const genre_id_to_name = {
        28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
        99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
        27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction",
        10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
    }
    genre = genre.split(",")
    for (let i = 0; i < genre.length; i++) {
        genre[i] = genre[i].replace(/^\D+/g, '');
        genre[i] = parseInt(genre[i])
    }
    genre = genre.map(id => genre_id_to_name[id])
    let stringGenre = ""
    for (let i = 0; i < genre.length; i++) {
        if (i === genre.length - 1) {
            stringGenre += genre[i]
        } else {
            stringGenre += genre[i] + ", "
        }
    }
    return (
        <div className="movie-card" onClick={navigateToMovie}>
            <img src={poster} alt="there will be blood" className="poster" />
            <div className="release-date">{`Released ${Months[month]} ${day}, ${year}`}</div>
            <div className="movie-name">{title}</div>
            <div className="movie-director">{stringGenre}</div>
        </div>
    );
}