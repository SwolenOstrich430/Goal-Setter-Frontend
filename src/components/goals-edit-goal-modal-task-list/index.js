import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import TaskProgressHeader from "../goals-edit-goal-modal-task-progress-header";
import TaskDisplay from "../goals-edit-goal-modal-task-container";
import goalDisplayHelpers from "../../helpers/goalDisplay";


function TaskList() {
    const goalIdToEdit = useSelector(state => state.goalsDisplayReducers.goalIdToEdit);
    const goals = useSelector(state => state.goalsReducers.goals);
    const tasks = useSelector(state => state.tasksReducers.tasks[goalIdToEdit]);
    console.log(tasks);
    
    return (
        <div className="goals-edit-goal-modal-tasks-container">
            <TaskProgressHeader tasks={tasks} transitions={true}/>
            <div className="goals-edit-goal-modal-tasks-list">
                {tasks.map(task => (
                    <TaskDisplay endDate={task.endDate} title={task.title} 
                     completed={task.completed} id={task.id} key={task.id}/>
                ))}
            </div>
        </div>
    )
}

export default TaskList;