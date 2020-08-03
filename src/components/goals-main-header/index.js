import React from "react";
import GoalMainListCell from "../goals-main-list-cell";
import "./index.css";

const SIZES = ["15", "40", "15", "15", "15"];
const HEADER_NAMES = ["Title", "Description", "End Date", "Status", "Progress"];

function GoalsMainListHeader(props) {
    return (
        <div className="goal-header-container">
            {HEADER_NAMES.map((columnName, i) => (
                <GoalMainListCell size={SIZES[i]} textValue={columnName} key={columnName}/>
            ))}
        </div>
    )
}

export default GoalsMainListHeader;