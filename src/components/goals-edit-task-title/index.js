import React, { useState } from "react";
import "./index.css";
// import { connect, useSelector } from "react-redux";
// import { updateGoal } from "../../actions/goalsActions";
// import goalDisplayHelpers from "../../helpers/goalDisplay";


function EditTaskTitle(props) {
    const [focusOnHeader, setFocusOnHeader] = useState(false);

    const saveTitleChange = () => {
        setFocusOnHeader(!focusOnHeader);

        props.updateTask();
    }

    return (
        <div style={{width: "100%"}}>
        {focusOnHeader ? 
            <input className="edit-task-title-input" type="text" 
            autoFocus onBlur={() => saveTitleChange()} value={props.taskTitle}
            onChange={event => props.setTaskTitle(event.target.value)}/> 
            : <p className="edit-task-title-display" 
               onClick={() => setFocusOnHeader(!focusOnHeader)}>
                 {props.taskTitle}
            </p>
        }
        </div>
    )
}

export default EditTaskTitle;