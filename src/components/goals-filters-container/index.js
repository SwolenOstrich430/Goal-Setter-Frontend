import React from "react";
import "./index.css";
import MainContentFilter from "../goals-filter-main-content";
import KanbanContentFilter from "../goals-kanban-content-filter";

function GoalsFilters() {
    return (
        <div className="goals-filters-container">
            <MainContentFilter/>
            <div>
                <KanbanContentFilter/>
            </div>
        </div>
    )
}


export default GoalsFilters;