import React from "react";
import Titlebar from "./components/Titlebar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieProfile from "./pages/MovieProfile";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                {/* <Route path="movies" element={<Movies />} /> */}
                <Route path="there-will-be-blood" element={<MovieProfile />} />
                <Route path="movies/:category" element={<Movies />} />
                <Route path="check/:movie_id" element={<MovieProfile />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
}