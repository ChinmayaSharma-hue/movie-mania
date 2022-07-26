import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Titlebar from "../components/Titlebar";
import bladeRunner from "../images/blade-runner3.png"
import MoviesBoard from "../components/MoviesBoard";
import Search from "../components/Search";
import "../style.css"
import axios from "axios";
import northman from "../images/northman.jpg"
import pulpFiction from "../images/pulpFiction.png"

export default function Movies() {
    let cat_to_image = {
        "Popular Films": bladeRunner,
        "In Theaters": northman,
        "Top Rated Films": pulpFiction
    }


    const api_url = 'http://127.0.0.1:8000/api/movie-list/'
    const [search, setSearch] = React.useState(0);
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(api_url).then(
            response => {
                setProduct(response.data)
            }
        )
    }, [api_url])

    if (product) {
        let moviesList = [];
        let category;
        for (let i = 0; i < product.length; i++) {
            moviesList.push(product[i])
            category = product[i].category
        }
        return (
            <div className="moviespage">
                <Header search={search} setSearch={setSearch} />
                <Titlebar image={cat_to_image[category]} firstline={category} movieTitle={"Blade Runner"}
                    movieYear={1982} top={"70px"} height={"40px"} />
                < Search state={search} setState={setSearch} page={window.location.href} />
                <MoviesBoard movies={moviesList} />
            </div>
        )
    }
}