import React, { useState } from "react";
import "./index.css";
import { useSelector, connect } from "react-redux";
import { updateGoal } from "../../actions/goalsActions";
import goalDisplayHelpers from "../../helpers/goalDisplay";
import LabelAndInput from "../base-form-input";
import LabelAndTextArea from "../base-form-text-area";

function UpdateGoalForm(props) {
    const goalIdToEdit = useSelector(store => store.goalsDisplayReducers.goalIdToEdit);
    const goals = useSelector(store => store.goalsReducers.goals);
    const goalToEdit = goalDisplayHelpers.getGoalToEdit(goalIdToEdit, goals);

    const [goalDescription, setGoalDescription] = useState(goalToEdit.description);
    const [goalStartDate, setGoalStartDate] = useState(goalToEdit.startDate.split("T")[0]);
    const [goalEndDate, setGoalEndDate] = useState(goalToEdit.endDate.split("T")[0]); 

    const goalWasUpdated = () => {
        const { description, startDate, endDate } = goalToEdit;
        
        return description !== goalDescription || startDate !== goalStartDate ||
            endDate !== goalEndDate;
    }

    const updateField = (fieldName, newVal) => {
        if(!goalWasUpdated) return;
        
        let updatedGoal = {
            ...goalToEdit, 
            description: goalDescription, 
            startDate: goalStartDate, 
            endDate: goalEndDate
        }

        props.updateGoal(updatedGoal);
    }
    
    return (
        <div className="goals-edit-goal-modal-date-and-description">
            <div className="first-last-name-input-container goals-edit-goal-modal-date-container">
                <LabelAndInput inline={true} inputType={"date"} 
                 inputName={"goalStartDate"} inputValue={goalStartDate}
                 onChange={event => setGoalStartDate(event.target.value)} labelName="Start Date"
                 onBlur={() => updateField("startDate", goalStartDate)}
                />
                <LabelAndInput inline={true} inputType={"date"} 
                 inputName={"goalEndDate"} inputValue={goalEndDate}
                 onChange={event => setGoalEndDate(event.target.value)} labelName="End Date"
                 onBlur={() => updateField("endDate", goalEndDate)}
                />
            </div>
            <div className="goals-edit-modal-description-input">
                <LabelAndTextArea placeholder={"Description"} labelName="Description"
                 inputName={"goalDescription"} inputValue={goalDescription}
                 onChange={event => setGoalDescription(event.target.value)}
                 onBlur={() => updateField("description", goalDescription)}
                />
            </div>
        </div>
    )
}

export default connect(null, { updateGoal })(UpdateGoalForm);