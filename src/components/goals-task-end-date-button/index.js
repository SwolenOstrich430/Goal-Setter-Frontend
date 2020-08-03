import React, { useState } from "react";
import "./index.css";
import MiniDateSelector from "../calendar-mini-date-selector";

function TaskEndDateButton(props) {
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div>
            <button className="goals-edit-goal-add-task-end-date-button" 
             onClick={() => setShowCalendar(!showCalendar)}>
                End Date
            </button>
            <MiniDateSelector currDate={props.currDate} setCurrDate={props.setCurrDate}
             showCalendar={showCalendar} setShowCalendar={setShowCalendar} 
             setDateIsSelected={props.setDateIsSelected}
            />
        </div>
    )
}

export default TaskEndDateButton;