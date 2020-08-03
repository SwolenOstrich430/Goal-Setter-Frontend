import React from "react";
import "./index.css";


function GoalListCell(props) {
    const getStatusColor  = () => {
        switch(props.textValue) {
            case "Not Started": 
                return "#a1a1a1";
            case "Blocked": 
                return "red";
            case "In Progress": 
                return "#448fea";
            case "Complete": 
                return "#33ae10";
            default: 
                return "";
        }
    }

    const statusStyling = {
        "background": getStatusColor(), 
        "color": "white", 
        "padding": "5px", 
        "borderRadius": "4px", 
        "fontSize": "14px", 
        "width": "80px",
        "textAlign": "center"
    }

    const getStatusValueContainerStyling = () => {
        return props.isStatus ? 
            {"width": `${props.size}%`, "display": "flex", "alignContent": "center"} : 
            {"width":  `${props.size}%`};
    }

    return (
        <div style={getStatusValueContainerStyling()} className="goal-list-cell-container">
            <p style={props.isStatus ? statusStyling : {}}>
                {props.textValue}
            </p>
        </div>
    )
}

export default GoalListCell;