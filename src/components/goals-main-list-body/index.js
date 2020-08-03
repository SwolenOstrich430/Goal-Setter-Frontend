import React from "react";
import "./index.css";
import GoalMainListRow from "../goals-main-list-row";
import AddNewGoalButton from "../goals-add-new-goal-button";
import { useSelector } from "react-redux"; 

function GoalMainListBody(props) {
    const goals = useSelector(state => state.goalsReducers.goals);

    return (
        <div className="goal-main-list-body-container">
            <AddNewGoalButton/>
            {goals.map(row => <GoalMainListRow data={row} key={row.id}/>)}
        </div>
    )
}

export default GoalMainListBody;