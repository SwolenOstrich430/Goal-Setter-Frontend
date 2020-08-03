import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { showGoalEditModal }  from "../../actions/goalsDisplayActions";
import SetStatusButton from "../goals-edit-goal-set-status-button";
import GoalTitleEditModal from "../goals-edit-modal-goal-title";

function EditGoalModalHeader(props) {
    return (
        <div className="goals-edit-goal-modal-header">
            <div className="goals-edit-goal-modal-header-title-container">
                <GoalTitleEditModal/>
                <SetStatusButton/>
            </div>
            <div className="goals-edit-goal-modal-change-status-and-close-container">
                <button onClick={() => props.showGoalEditModal(false)}
                 className="goals-edit-modal-close-modal-button">
                     x
                </button>
            </div>
        </div>
    )
}

export default connect(null, { showGoalEditModal })(EditGoalModalHeader);