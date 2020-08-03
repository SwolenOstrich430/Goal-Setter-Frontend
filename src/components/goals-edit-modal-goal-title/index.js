import React, { useState } from "react";
import "./index.css";
import { connect, useSelector } from "react-redux";
import { updateGoal } from "../../actions/goalsActions";
import goalDisplayHelpers from "../../helpers/goalDisplay";


function EditGoalTitle(props) {
    const goals = useSelector(store => store.goalsReducers.goals);
    const goalIdToEdit = useSelector(store => store.goalsDisplayReducers.goalIdToEdit);
    const goalToEdit = goalDisplayHelpers.getGoalToEdit(goalIdToEdit, goals);

    const [focusOnHeader, setFocusOnHeader] = useState(false);
    const [goalTitle, setGoalTitle] = useState(goalToEdit.title);

    const saveTitleChange = () => {
        setFocusOnHeader(!focusOnHeader);

        if(goalToEdit.title === goalTitle) return;

        let updatedGoal = {
            ...goalToEdit, 
            title: goalTitle
        }

        props.updateGoal(updatedGoal);
    }

    return (
        <div style={{width: "100%"}}>
        {focusOnHeader ? 
            <input className="goal-edit-goal-modal-header-title" type="text" 
            autoFocus onBlur={() => saveTitleChange()} value={goalTitle}
            onChange={event => setGoalTitle(event.target.value)}/> : 
            <h3 onClick={() => setFocusOnHeader(!focusOnHeader)}>{goalTitle}</h3>
        }
        </div>
    )
}

export default connect(null, { updateGoal })(EditGoalTitle);