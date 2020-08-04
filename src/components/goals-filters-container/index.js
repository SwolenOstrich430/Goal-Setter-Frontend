import React from "react";
import "./index.css";
import MainContentFilter from "../goals-filter-main-content";
import KanbanContentFilter from "../goals-kanban-content-filter";
import { useSelector } from "react-redux";

function GoalsFilters() {
    const showMainList = useSelector(state => state.goalsDisplayReducers.showMainList);

    return (
        <div className="goals-filters-container">
            <MainContentFilter/>
            <div>
                {!showMainList && <KanbanContentFilter/>}
            </div>
        </div>
    )
}


export default GoalsFilters;