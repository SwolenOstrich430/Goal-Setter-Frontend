import React from "react";
import "./index.css";
import moment from "moment";

function Note(props) {

    const getEndDateDisplay = endDate => {
        return `${moment(endDate).format("hh:mm a")}`;
    }

    return (
        <div className="note-container">
            <div className="note-text-container">
                <p className="note-text">{props.text}</p>
            </div>
            <p className="note-creation-date" align="right">{getEndDateDisplay(props.endDate)}</p>
        </div>
    )
}

export default Note;