import React from "react";
import "./index.css";


function GoalPercentageCompleteIcon(props) {
    return (
        <div className="goals-complete-percentage-container">
            <svg className="goals-percentage-complete-sub" viewBox="0 0 36 36">
                <path
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e1e1e1"
                    strokeWidth="4"
                    strokeDasharray="100, 100"
                />
            </svg>
            <svg className="goals-percentage-complete-main" viewBox="0 0 36 36">
                <path
                   d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#33ae10"
                    strokeWidth="4"
                    strokeDasharray={`${props.percentComplete}, 100`}
                />
            </svg>
            <p className="goals-percent-complete-text">{`${props.percentComplete}%`}</p>
        </div>
    )
}

export default GoalPercentageCompleteIcon;