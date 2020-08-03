import React from "react";
import "./index.css";
import moment from "moment";

function TaskEndDateDisplay(props) {
    const getDateDisplay = () => {
        let selectedDateAsMoment = moment(props.selectedDate);
        return selectedDateAsMoment.format("MMM DD");
    }

    const handleDeleteSelectedDate = () => {
        props.setSelectedDate(new Date());
        props.setDateIsSelected(false);
    } 

    return (
        <div className="task-end-date-display-container">
            <span className="task-end-date-display">{getDateDisplay()}</span>
            <button className="delete-selected-date" 
             onClick={handleDeleteSelectedDate}>
                x
            </button>
        </div>
    )
}

export default TaskEndDateDisplay;