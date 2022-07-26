import React, { useContext, useEffect } from "react";
import "../stylesheets/Search.css";
import closeIcon from "../images/removed-bg.png";
import SearchCard from "./SearchCard";
import annette from "../images/annette.jpg";
import { useState } from "react";
import axios from "axios";

export default function Sidebar({ state, setState, page }) {
    const api_url = 'http://127.0.0.1:8000/api/search-profile-detail/'
    const [product, setProduct] = useState(null)
    const [search, setSearch] = useState(null)

    useEffect(() => {
        axios.get(api_url).then(
            response => {
                setProduct(response.data)
            }
        )
    }, [api_url])

    let searchCards = []
    if (product) {
        if (product.length > 0) {
            setState(1)
            searchCards = product.map(product => {
                let cast_and_crew = product.cast_and_crew
                let crew = cast_and_crew.crew
                let director
                for (let i = 0; i < crew.length; i++) {
                    if (crew[i].job == "Director") {
                        director = crew[i].name
                    }
                }
                return <SearchCard posterPath={"https://image.tmdb.org/t/p/original" + product.posterPath} title={product.title} releaseDate={product.releaseDate}
                    director={director} id={product.movie_id} state={state} setState={setState} />
            })
        }
    }

    if (search == 0) {
        setState(0)
        let removeTextIndex = page.indexOf("?searchInput=")
        page = page.substring(0, removeTextIndex)
        window.location.href = page;
    }

    changeWidth(state);


    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-container">
                <img src={closeIcon} alt="closeIcon" className="closeIcon" onClick={() => setSearch(0)} />
                <div className="search">SEARCH</div>
                <form name="searchbox" target="_self" method="GET">
                    <input type="text" className="searchInput" id="searchInput" name="searchInput" placeholder="SEARCH" spellCheck="false" />
                    <input type="submit" className="searchSubmit" value="SEARCH" hidden />
                </form>
                <div className="search-results">
                    {searchCards}
                </div>
            </div>
        </div>
    );

}

function changeWidth(state) {
    const a = document.getElementById("sidebar");
    if (a) {
        if (state == 0) {
            a.style.width = "0px";
        }
        else {
            a.style.width = "600px";
        }
    }
}