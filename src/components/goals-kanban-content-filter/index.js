import React, { useState } from "react";
import "./index.css";
import { useSelector, connect } from "react-redux";
import FilterOption from "../goals-kanban-content-filter-option";
import goalHelpers from "../../helpers/goalDisplay";
import { setGoalToEdit } from "../../actions/goalsDisplayActions";


function KanbanContentFilter(props) {
    const goals = useSelector(state => state.goalsReducers.goals);
    const goalIdToEdit = useSelector(state => state.goalsDisplayReducers.goalIdToEdit);
    const [showContentSelector, setShowContentSelector] = useState(false);

    const handleClick = id => {
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

    const getDisplayText = () => {
        if(!goalIdToEdit) return "All";
        
        let goal = goalHelpers.getGoalToEdit(goalIdToEdit, goals);
        return goal.title;
    }

    return (
        <div className="goals-kanban-content-filter" onClick={() => setShowContentSelector(!showContentSelector)}>
            <button 
                className="auth-button auth-dark goals-kanban-content-selector-button"
                onClick={() => setShowContentSelector(!showContentSelector)}
            >
                Show: {getDisplayText()}
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