import React, { useState, useEffect } from "react";
import { deleteTask } from "../../actions/goalsActions";
import { connect, useSelector } from "react-redux";
import { updateTask } from "../../actions/tasksActions";
import "./index.css";
import TaskEndDateButton from "../goals-task-end-date-button";
import EditTaskTitle from "../goals-edit-task-title";
import TaskEndDateDisplay from "../goals-task-end-date-display";


function TaskDisplay(props) {
    const [currDate, setCurrDate] = useState(props.endDate);
    const [dateIsSelected, setDateIsSelected] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(props.completed);
    const [taskTitle, setTaskTitle] = useState(props.title)
    const goalIdToEdit = useSelector(state => state.goalsDisplayReducers.goalIdToEdit);

    useEffect(() => {
        if(props.endDate !== currDate) {
            updateTask();
        }
    })

    const getOpacity = () => {
        if(isClicked) return {"opacity": 1}
        if(isHovering) return {"opacity": 0.4}
        return {"opacity": 0}
    }

    const updateTask = (key, value) => {
        let taskToEdit = {
            endDate: currDate, 
            completed: isClicked, 
            title: taskTitle, 
            id: props.id, 
        }

        if(key) {
            taskToEdit[key] = value;
        }

        props.updateTask(goalIdToEdit, taskToEdit);
    }

    const handleIsCompleteChange = () => {
        updateTask("completed", !isClicked);
        setIsClicked(!isClicked);
    }

    return (
        <div className="goal-edit-goal-modal-task">
            <div className="goal-edit-goal-modal-task-check-button-title-container">
                <button className="goal-edit-goal-modal-task-check-button"
                 onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
                 onClick={handleIsCompleteChange}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={getOpacity()} 
                        viewBox="0 0 24 24" className="goal-edit-goal-modal-task-check-mark">
                        <path fill="#111" d="M12 2c5.514 0 10 4.486 10 10s-4.486 
                         10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 
                         12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 
                         1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/>
                    </svg>
                </button>
                <EditTaskTitle taskTitle={taskTitle} setTaskTitle={setTaskTitle} updateTask={updateTask}/>
            </div>
            <div className="goal-edit-goal-modal-task-date-and-delete-container">
                {dateIsSelected ?
                <TaskEndDateDisplay setSelectedDate={setCurrDate} setDateIsSelected={setDateIsSelected}
                    selectedDate={currDate}
                />
                : <TaskEndDateButton currDate={currDate} setCurrDate={setCurrDate} 
                   dateIsSelected={dateIsSelected} setDateIsSelected={setDateIsSelected}
                  />
                }
                <div className="goals-edit-goal-modal-delete-button-container"
                 onClick={() => props.deleteTask(props.id, goalIdToEdit)}
                >
                    <img className="goals-edit-goal-modal-delete-button" 
                     src="./delete.svg" alt="delete-button"
                    />
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deleteTask, updateTask })(TaskDisplay);