import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../auth-login-form";
import SignUpForm from "../auth-sign-up-form";
import HomeWelcomeMessage from "../home-jumbotron-welcome-message";
import "./index.css";

function HomeJumbotron() {
    const loginSignUpStatus = useSelector(state => state.navbarReducers.loginSignUpStatus);

    return (
        <div className="home-jumbotron-container">
            <svg className="home-jumbotron-wave" viewBox="0 0 500 150" preserveAspectRatio="none" 
                 style={{"height": "100%", "width": "100%"}}>
                <path d="M0.00,150 C200.09,140.18 260.20,60.00 500.00,150.48 Z"
                      style={{"stroke": "none", "fill": "#fff"}}>
                </path>
            </svg>
            <div className="home-welcome-message-container">
                <HomeWelcomeMessage/>
            </div>
            <div className="home-jumbotron-auth-container">
                {(loginSignUpStatus === "login") ? <LoginForm/> : <SignUpForm/>}
            </div>
        </div>
    )
}

export default HomeJumbotron;