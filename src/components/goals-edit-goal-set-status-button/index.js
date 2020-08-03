import React, { useState } from "react";
import "./index.css";
import { connect, useSelector } from "react-redux";
import goalDisplayHelpers from "../../helpers/goalDisplay";
import { getNewPlace } from "../../helpers/goalHelpers";
import { updateGoal } from "../../actions/goalsActions";

const statuses = [
    {text: "Not Started", color: "#a1a1a1"}, 
    {text:"In Progress", color: "#448fea"},
    {text:"Blocked", color: "red"},
    {text:"Complete", color: "#33ae10"}
];

function SetGoalStatusButton(props) {
    const goals = useSelector(store => store.goalsReducers.goals);
    const goalIdToEdit = useSelector(store => store.goalsDisplayReducers.goalIdToEdit);
    const goalToEdit = goalDisplayHelpers.getGoalToEdit(goalIdToEdit, goals);

    const [showStatusSelector, setShowStatusSelector] = useState(false);
    const [currStatus, setCurrStatus] = useState(goalToEdit.status);

    const getBackgroundColor = () => {
        for(const status of statuses) {
            if(status.text === currStatus) {
                return {"backgroundColor": status.color};
            }
        }
    }

    const setNewStatus = statusValue => {
        if(statusValue === currStatus) {
            return setShowStatusSelector(false);
        }

        let updatedGoal = {
            ...goalToEdit,
            status: statusValue, 
            place: getNewPlace(goals, statusValue)
        }

        console.log(updatedGoal);
        
        props.updateGoal(updatedGoal);
        setCurrStatus(statusValue);
        setShowStatusSelector(false);
    }

    const getStyle = () => {
        return {
            "opacity": showStatusSelector ? 1 : 0,
            "display": showStatusSelector ? "block" : "none"
        }
    }
    
    return (
        <div>
            <button onClick={() => setShowStatusSelector(!showStatusSelector)} 
             className="goals-edit-goal-modal-change-status-button" style={getBackgroundColor()}>
                {currStatus}
            </button>
            <ul className="goals-edit-modal-change-status-container" style={getStyle()}>
                {statuses.map(status => (
                    <li className="goals-edit-modal-change-status-item-container" role="button"
                     onClick={() => setNewStatus(status.text)} key={status.text}
                    >
                        <svg className="list-bullet" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={status.color}>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span className="goals-edit-modal-change-status">{status.text}</span>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default connect(null, { updateGoal })(SetGoalStatusButton);