import React from "react";
import "./index.css";


function KanbanContentFilterOption(props) {
    return (
        <div 
            className="goals-kanban-content-option-container"
            onClick={props.handleClick}
        >
            <svg 
                className="kanban-list-bullet" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#222247"
            >                   
                <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <option 
                value={props.value}
                className="goals-kanban-content-option"
                >
                {props.text}
            </option>
        </div>
    )
}

export default KanbanContentFilterOption;