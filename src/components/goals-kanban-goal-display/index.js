import React from "react";
import "./index.css";
import GoalEditButton from "../goals-goal-edit-button";
import TaskProgressHeader from "../goals-edit-goal-modal-task-progress-header";
import StatusDisplay from "../goals-main-list-cell";

function KanbanGoalDisplay(props) {
    return (
        <div className="kanban-goal-card-display">
            <div className="kanban-goal-card-header-container">
                <h4 className="kanban-goal-card-title-display">{props.goal.title}</h4>
                <GoalEditButton goalId={props.goal.id}/>
            </div>
            <StatusDisplay textValue={props.goal.status} isStatus={true}/>
            <div className="kanban-goal-card-task-progress-bar-container">
                <TaskProgressHeader tasks={props.goal.tasks}/>
            </div>
        </div>
    )
}

export default KanbanGoalDisplay;