import React, { Component } from 'react';
import axios from "axios";
import "../stylesheets/Signup.css";
import bluevelvet from "../images/bluevelvet2.jpg";

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
            email: this.state.email,
            password: this.state.password
        }
        console.log(user);
        axios.post('http://127.0.0.1:8000/accounts/api/auth/register', user)
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

    handleEmailChange = event => {
        this.setState({
            email: event.target.value,
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value,
        });
    }

    render() {
        return (
            <div className="signup-form">
                <div className='signup-form-leftside'>
                    <img src={bluevelvet} alt="blue velvet" className="signup-form-leftside-image" />
                </div>
                <div className='signup-form-rightside'>
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="register-form-header">Register</div>
                        <label className="username-label">Username</label>
                        <input type="text" className="username" id="username" name="username" placeholder="Username" spellCheck="false" onChange={this.handleUsernameChange} /><br></br>
                        <label className="email-label">Email</label>
                        <input type="text" className="email" id="email" name="email" placeholder="Email" spellCheck="false" onChange={this.handleEmailChange} /><br></br>
                        <label className="password-label">Password</label>
                        <input type="password" className="password" id="password" name="password" placeholder="Password" spellCheck="false" onChange={this.handlePasswordChange} /><br></br>
                        <input type="submit" className="submit" value="Sign Up" />
                    </form>
                </div>
            </div>

        );
    }
}
export default SubmitForm;
