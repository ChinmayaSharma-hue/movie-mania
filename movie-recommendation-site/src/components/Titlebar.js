import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Titlebar.css";

export default function Titlebar({ image, firstline, secondline, movieTitle, movieYear, top, height }) {

    return (
        <div className="titlebar">
            <img className="titlebar-background" src={image} alt="phantomthread" />
            <div className="titlebar-description">
                <div className="Description" id="Description" style={{ top: top, height: height }} >
                    <div className="firstline">{firstline}</div>
                    {secondline && <div className="secondline">{secondline}</div>}
                </div>
                <div className="movie-title">
                    <div className="name">{movieTitle}</div>
                    <div className="year">{movieYear}</div>
                </div>
            </div>
        </div>

    );
}