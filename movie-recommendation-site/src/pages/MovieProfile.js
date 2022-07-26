import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileMainContent from "../components/ProfileMainContent";
import Reviews from "../components/Reviews";
import Search from "../components/Search";
import axios from "axios";
import { useState } from "react";

export default function MovieProfile() {
    const api_url = 'http://127.0.0.1:8000/api/movie-detail/'
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
        let movie = product[0]
        let cast_and_crew = movie.cast_and_crew
        let crew = cast_and_crew.crew
        let director
        for (let i = 0; i < crew.length; i++) {
            if (crew[i].job == "Director") {
                director = crew[i].name
            }
        }
        let reviews = movie.reviews.results
        return (
            <div className="movieprofile">
                <Header search={search} setSearch={setSearch} />
                < Search state={search} setState={setSearch} page={window.location.href} />
                <ProfileMainContent director={director} title={movie['title']} synopsis={movie.synopsis} posterPath={movie.posterPath} />
                <Reviews reviewProps={reviews} />
                <Footer />
            </div>
        )
    }
}