import React, { useEffect } from "react";
import axios from "axios";

export default function Logout() {
    const api_url = "http://localhost:8000/accounts/api/auth/logout "
    useEffect(() => {
        axios.post(api_url, {}, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }).then(
            response => {
                console.log(response);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, [api_url])
    window.location.href = "/";
}