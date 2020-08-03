import React, { useState } from "react";
import "./index.css";
import LabelAndInput from "../base-form-input";
import LabelAndTextArea from "../base-form-text-area";
import { createGoal } from "../../actions/goalsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


function CreateGoalForm(props) {
    const [goalTitle, setGoalTitle] = useState("");
    const [goalDescription, setGoalDescription] = useState("");
    const [goalWhy, setGoalWhy] = useState("");
    const [goalStartDate, setGoalStartDate] = useState("");
    const [goalEndDate, setGoalEndDate] = useState("");

    const buildGoal = () => {
        return {
            title: goalTitle, 
            description: goalDescription, 
            why: goalWhy, 
            startDate: goalStartDate,
            endDate: goalEndDate
        }
    }

    return (
        <div className="create-goal-form-overlay">
            <button onClick={props.handleClose} className="close-overlay-button">X</button>
            <form className="create-goal-form">
                <h3 className="create-goal-form-header">Create Goal</h3>
                <LabelAndInput inline={false} placeholder={"Title"}
                 inputType={"title"} inputName={"goalTitle"} inputValue={goalTitle}
                 onChange={event => setGoalTitle(event.target.value)} labelName="Title"
                />
                <LabelAndTextArea placeholder={"Description"} labelName="Description"
                 inputName={"goalDescription"} inputValue={goalDescription}
                 onChange={event => setGoalDescription(event.target.value)}
                />
                <LabelAndInput inline={false} placeholder={"Why"}
                 inputType={"text"} inputName={"goalWhy"} inputValue={goalWhy}
                 onChange={event => setGoalWhy(event.target.value)} labelName="Why"
                />
                <div className="first-last-name-input-container">
                    <LabelAndInput inline={true} inputType={"date"} 
                     inputName={"goalStartDate"} inputValue={goalStartDate}
                     onChange={event => setGoalStartDate(event.target.value)} labelName="Start Date"
                    />
                    <LabelAndInput inline={true} inputType={"date"} 
                     inputName={"goalEndDate"} inputValue={goalEndDate}
                     onChange={event => setGoalEndDate(event.target.value)} labelName="End Date"
                    />
                </div>
                <button onClick={() => props.createGoal(buildGoal())} 
                 className="create-goal-form-button form-button">
                    Create Goal
                </button>
            </form>
        </div>
    )
}

CreateGoalForm.propTypes = {
    createGoal: PropTypes.func.isRequired
}

export default connect(null, { createGoal })(CreateGoalForm);
