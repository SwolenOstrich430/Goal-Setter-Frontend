import React from "react";
import "./index.css";

function GoalsMainContentFilter(props) {
    return (
        <button 
            className="auth-button auth-light"
            onClick={() => props.handleClick()}
        >
            {props.text}
        </button>
    )
}

export default GoalsMainContentFilter;