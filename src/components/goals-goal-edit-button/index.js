import React, { useState } from "react";
import "./index.css";
import GoalEditModal from "../goals-edit-modal";


function GoalEditButton(props) {
    const [showEditModal, toggleShowEditModal] = useState(false);

    return (
        <div className="goal-edit-button-container">
            <button className="goal-edit-button" onClick={() => toggleShowEditModal(!showEditModal)}>
                <div className="goal-edit-dot"></div>
                <div className="goal-edit-dot"></div>
                <div className="goal-edit-dot"></div>
            </button>
            {showEditModal && 
             <GoalEditModal goalId={props.goalId} onMouseLeave={() => toggleShowEditModal(!showEditModal)}/>}
        </div>

    )
}

export default GoalEditButton;
