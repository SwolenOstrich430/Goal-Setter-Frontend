import React, { useState } from "react";
import "./index.css";
import TaskEndDateButton from "../goals-task-end-date-button";
import TaskEndDateDisplay from "../goals-task-end-date-display";
import { connect, useSelector } from "react-redux";
import { createTask } from "../../actions/tasksActions";

function CreateTaskForm(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [taskTitle, setTitle] = useState("");
    const [dateIsSelected, setDateIsSelected] = useState(false);
    const goalIdToEdit = useSelector(store => store.goalsDisplayReducers.goalIdToEdit);

    const buildTask = () => {
        const newTask = {
            title: taskTitle, 
            endDate: selectedDate
        }

        setSelectedDate(new Date());
        setTitle("");
        setDateIsSelected(false);

        return newTask;
    }

    return (
        <div>
            <h3 className="goals-edit-goal-modal-add-task-header">Add a Task</h3>
            <div className="goals-edit-goal-add-task-form">
                <div className="goals-edit-goal-tasks-input-container">
                    <input className="goals-edit-goal-add-task-input" type="text"
                     value={taskTitle} onChange={event => setTitle(event.target.value)}
                    />
                    <div className="goals-edit-goal-add-task-end-date-selector-container">
                        {dateIsSelected ?
                         <TaskEndDateDisplay setSelectedDate={setSelectedDate} setDateIsSelected={setDateIsSelected}
                          selectedDate={selectedDate}
                         />
                         : <TaskEndDateButton currDate={selectedDate} setCurrDate={setSelectedDate}
                            setDateIsSelected={setDateIsSelected}
                           />
                        }
                    </div>
                </div>
                <button className="goals-edit-goal-modal-add-task-button" 
                 onClick={() => props.createTask(goalIdToEdit, buildTask())}>
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default connect(null, { createTask })(CreateTaskForm);