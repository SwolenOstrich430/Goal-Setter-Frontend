import React from "react";
import "./index.css";
import UpdateGoalForm from "../goals-edit-goal-modal-update-goal-form";
import EditGoalModalHeader from "../goals-edit-goal-modal-header";
import CreateTaskForm from "../goals-edit-goal-modal-create-task-form";
import TaskList from "../goals-edit-goal-modal-task-list";
import NotesContainer from "../goals-edit-modal-notes-container"

function GoalEditModal() {
    return (
        <div className="create-goal-form-overlay">
            <div className="goals-edit-goal-modal-container">
                <EditGoalModalHeader/>
                <div className="goals-edit-goal-modal-body">
                    <div className="goals-edit-goal-modal-details">
                        <UpdateGoalForm/>
                        <CreateTaskForm/>
                        <TaskList/>
                    </div>
                    <NotesContainer/>
                </div>
            </div>
        </div>
    )
}

export default GoalEditModal;