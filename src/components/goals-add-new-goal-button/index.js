import React, { useState } from "react";
import "./index.css";
import CreateGoalForm from "../goals-create-goal-form";


function AddNewGoalButton(props) {
    const [showCreateGoalForm, setCreateGoalForm] = useState(false);
    const handleClose = () => setCreateGoalForm(!showCreateGoalForm);

    return (
        <div>
            <button className="add-new-goal-button" 
             onClick={handleClose}>
                + Add new goal
            </button>
            {showCreateGoalForm && <CreateGoalForm handleClose={handleClose}/>}
        </div>
    )
}
  
export default AddNewGoalButton;