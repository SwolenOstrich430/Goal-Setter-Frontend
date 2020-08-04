import React from "react";
import "./index.css";

function TaskProgressHeader(props) {
    const getNumComplete = () => {
        if(props.tasks.length === 0) return 0;

        let numComplete = 0;

        for(const tasks of props.tasks) {
            if(tasks.completed) numComplete++;
        }

        return numComplete;
    }

    const getPercentComplete = () => {
        if(props.tasks.length === 0) return 0;
        const numComplete = getNumComplete(props.tasks);

        return Math.round(numComplete / props.tasks.length * 100);
    }

    const getLength = () => props.tasks.length;


    return (
        <div className="goals-edit-goal-modal-tasks-header">
            <h5 className="goals-edit-goal-modal-tasks-percent-completed-header">
                {getPercentComplete()}% ({getNumComplete()} out of {getLength()}) Completed
            </h5>
            <div className="goals-edit-goal-modal-tasks-percent-completed-tracker-container">
                <div style={{width: `${getPercentComplete()}%`}} 
                 className="goals-edit-goal-modal-tasks-percent-completed-tracker">
                </div>
            </div>
        </div>
    )
}

export default TaskProgressHeader;