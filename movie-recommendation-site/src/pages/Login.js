import React, { Component } from 'react';
import axios from "axios";
import citizenKane from "../images/citizenKane.png";
import "../stylesheets/Login.css";

class SubmitForm extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    };
    /* This is where the magic happens 
    */
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        axios.post('http://127.0.0.1:8000/accounts/api/auth/login', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                window.location.href = "/";
            })
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value,
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value,
        });
    }

    render() {
        return (
            <div className="signin-form">
                <div className='signin-form-leftside'>
                    <img src={citizenKane} alt="blue velvet" className="signin-form-leftside-image" />
                </div>
                <div className='signin-form-rightside'>
                    <div className="signin-form-header">Log In</div>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label className="username-label">Username</label>
                        <input type="text" className="username" id="username" name="username" placeholder="Username" spellCheck="false" onChange={this.handleUsernameChange} />
                        <label className="password-label">Password</label>
                        <input type="text" className="password" id="password" name="password" placeholder="Password" spellCheck="false" onChange={this.handlePasswordChange} />
                        <input type="submit" className="submit" value="Log In" />
                    </form>
                </div>
            </div>
        );
    }
}
export default SubmitForm;
