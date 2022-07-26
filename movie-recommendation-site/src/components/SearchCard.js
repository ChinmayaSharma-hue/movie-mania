import React from "react";
import "../stylesheets/SearchCard.css";
import annette from "../images/annette.jpg";

export default function SearchCard({ posterPath, title, releaseDate, director, id, state, setState }) {

    function navigateToMovie() {
        // 👇️ navigate to /contacts
        setState(0)
        console.log("state")
        window.location.href = `/check/${id}`;
    };


    return (
        <div className="search-card" onClick={navigateToMovie}>
            <img className="search-card-image" src={posterPath} alt="annette" />
            <div className="search-card-description">
                <div className="search-card-title">{title}</div>
                <div className="search-card-year">{`Released in ${releaseDate}`}</div>
                <div className="search-card-director">{`Directed by ${director}`}</div>
            </div>
        </div>
    )
}