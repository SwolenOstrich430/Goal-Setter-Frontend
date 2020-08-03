import React from "react";
import "./index.css";
import features from "../../helpers/features";
import SubtronFeature from "../home-subtron-feature";

function HomeSubtron() {
    return (
        <div className="home-subtron-container">
            <div className="home-subtron-main-header-container">
                <h4 className="home-subtron-main-header">
                    Everything you need to get started reaching your goals!
                </h4>
                <p>With a full suite of tools, we set you up to succeed. </p>
            </div>
            <div className="home-subtron-item-container">
                {features.map(feature => <SubtronFeature {...feature}/>)}
            </div>
        </div>
    )
}

export default HomeSubtron;