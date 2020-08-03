import React from "react";
import "./index.css";
import { deleteGoal } from "../../actions/goalsActions";
import { showGoalEditModal } from "../../actions/goalsDisplayActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


function GoalEditModal(props) {
    return (
        <div className="goal-edit-modal-container" onMouseLeave={props.onMouseLeave}>
            <button className="goal-edit-modal-button" 
            onClick={() => props.showGoalEditModal(true, props.goalId)}>
                Edit Goal
            </button>
            <button className="goal-edit-modal-button" onClick={() => props.deleteGoal(props.goalId)}>
                Delete Goal
            </button>
        </div>
    )
}

GoalEditModal.propTypes = {
    deleteGoal: PropTypes.func.isRequired, 
    showGoalEditModal: PropTypes.func.isRequired
}

export default connect(null, { deleteGoal, showGoalEditModal })(GoalEditModal);