import React from "react";
import "./index.css";

function HomeSubtronFeature(props) {
    return (
        <div className="home-subtron-feature-container">
            <img className="home-subtron-feature-image" src={props.imagePath} alt={props.imageAlt}/>
            <p>{props.featureDescription}</p>
        </div>
    )
}

export default HomeSubtronFeature