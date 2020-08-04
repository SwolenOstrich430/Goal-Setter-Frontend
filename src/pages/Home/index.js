import "./index.css";
import React from "react";
import TopNavbar from "../../components/navbar-top";
import HomeJumbotron from "../../components/home-jumbotron";
import HomeSubtron from "../../components/home-subtron";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

function Home() {
    const isAuthenticated = useSelector(state => state.authReducers.isAuthenticated)
    let history = useHistory();

    if(isAuthenticated) history.push("/goals");
    
    return (
        <div>
            <TopNavbar/>
            <HomeJumbotron/>
            <HomeSubtron/>
        </div>
    )
}

export default Home;