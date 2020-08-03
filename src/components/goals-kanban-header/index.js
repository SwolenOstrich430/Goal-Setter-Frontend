import React from "react";
import "./index.css";

function KanbanHeader(props) {
    return (
        <div className="kanban-header-container">
            <h3 className="kanban-header-display">{props.headerTitle}</h3>
            
        </div>
    )
}

export default KanbanHeader;