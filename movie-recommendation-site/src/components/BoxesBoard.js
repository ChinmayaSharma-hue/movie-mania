import React from "react";
import "../stylesheets/Boxes.css";
import annette from "../images/annette.jpg";
import amsterdam from "../images/amsterdam.jpg";
import Box from "../components/Box";
import terminator from "../images/terminator.png";

export default function BoxesBoard() {
    // onClick={window.location.href = "/movies/popularfilms"}

    return (
        <div className="boxes">
            <Box title={"Popular Films"} image={terminator} />
            <Box title={"Top Rated Films"} image={annette} />
            <Box title={"In Theaters"} image={amsterdam} />
        </div>
    )
}