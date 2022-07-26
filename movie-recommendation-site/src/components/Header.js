import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import "../stylesheets/Header.css";
import magGlass from "../images/mag-glass.png";
import profileIcon from "../images/removed-bgProfile.png";
import axios from "axios";



export default function Header({ search, setSearch }) {
    const navigate = useNavigate();

    const navigateToMovies = () => {
        // 👇️ navigate to /contacts
        navigate('/');
    };

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/home');
    };

    const navigateLogin = () => {
        // 👇️ navigate to /login
        navigate('/login');
    };

    const navigateRegister = () => {
        // 👇️ navigate to /register
        navigate('/signup');
    };

    const navigateLogout = () => {
        // 👇️ navigate to /logout
        navigate('/logout')
    };

    const [isAuth, setIsAuth] = useState(false);
    console.log(localStorage.getItem('token'));

    const api_url = "http://localhost:8000/accounts/api/auth/user"
    useEffect(() => {
        axios.get(api_url, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }).then(
            response => {
                setIsAuth(true);
            }
        ).catch((error) => {
            setIsAuth(false);
            console.log(error);
        })
    }, [api_url])

    return (
        <div className="profileheader">
            <div className="profileheader--title">
                MOVIE RECOMMENDATIONS
            </div>
            <div className="links">
                <span className="home" onClick={navigateHome}>Home</span>
                <span className="movies" onClick={navigateToMovies}>Diary</span>
                <span className="movies">Collection</span>
                <span className="search-icon" onClick={() => setSearch(1)}><img src={magGlass} className="magGlass" /></span>
                {isAuth == true && <span className="profile-icon"><img src={profileIcon} className="profileIcon" /></span>}
                {isAuth == true && <span className='logout' onClick={navigateLogout}>Logout</span>}
                {isAuth == false && <span className='login' onClick={navigateLogin}>Login</span>}
                {isAuth == false && <span className='signup' onClick={navigateRegister}>Signup</span>}
            </div>
        </div>
    )
}