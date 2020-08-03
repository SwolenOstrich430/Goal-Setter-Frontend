import React, { useState } from "react";
import "./index.css";
import { useSelector, connect } from "react-redux";
import FilterOption from "../goals-kanban-content-filter-option";
import { setGoalToEdit } from "../../actions/goalsDisplayActions";


function KanbanContentFilter(props) {
    const goals = useSelector(state => state.goalsReducers.goals);
    const [showContentSelector, setShowContentSelector] = useState(false);

    const handleClick = id => {
        console.log("clicked");
        console.log("here's the id: " + id);

        props.setGoalToEdit(id);
    }

    const getGoalOptions = goals => {
        return goals.map(goal =>  (
            <FilterOption 
                text={goal.title} 
                value={goal.id} 
                handleClick={() => handleClick(goal.id)}
            />
        ))
    }

    return (
        <div className="goals-kanban-content-filter">
            <button 
                className="auth-button auth-dark goals-kanban-content-selector-button"
                onClick={() => setShowContentSelector(!showContentSelector)}
            >
                Show: All
            </button>
            {showContentSelector &&
            <div className="goals-kanban-content-selector">
                <FilterOption 
                    text={"All"} 
                    value={"all"} 
                    handleClick={() => handleClick(null)}
                />
                {getGoalOptions(goals)}
            </div>}
        </div>
    )
}

export default connect(null, { setGoalToEdit })(KanbanContentFilter);