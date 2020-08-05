import React from "react";
import "./index.css";
import { Draggable } from "react-beautiful-dnd";
import GoalEditButton from "../goals-goal-edit-button";
import TaskProgressHeader from "../goals-edit-goal-modal-task-progress-header";
import StatusDisplay from "../goals-main-list-cell";
import { useSelector } from "react-redux";

function KanbanGoalCard(props) {
    const tasks = useSelector(state => state.tasksReducers.tasks);

    return (
        <Draggable draggableId={props.draggableId} index={props.index} goalId={props.goal.id}>
        {(provided) => (
            <div className="kanban-goal-card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className="kanban-goal-card-header-container">
                    <h4 className="kanban-goal-card-title-display">{props.goal.title}</h4>
                    <GoalEditButton goalId={props.goal.id}/>
                </div>
                <StatusDisplay textValue={props.goal.status} isStatus={true}/>
                <div className="kanban-goal-card-task-progress-bar-container">
                    <TaskProgressHeader tasks={tasks[props.goal.id]} transitin={props.transition}/>
                </div>
            </div>
        )}
        </Draggable>
    )
}

export default KanbanGoalCard