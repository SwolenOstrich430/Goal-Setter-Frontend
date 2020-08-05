import React from "react";
import "./index.css";
import GoalMainListRow from "../goals-main-list-row";
import AddNewGoalButton from "../goals-add-new-goal-button";
import { useSelector } from "react-redux"; 

function GoalMainListBody(props) {
    const goals = useSelector(state => state.goalsReducers.goals);
    const tasks = useSelector(state => state.tasksReducers.tasks);
    console.log(tasks);
    return (
        <div className="goal-main-list-body-container">
            <AddNewGoalButton/>
            {goals.map(row => (
                <GoalMainListRow data={row} key={row.id} tasks={tasks[row.id]}/>
            ))}
        </div>
    )
}

export default GoalMainListBody;