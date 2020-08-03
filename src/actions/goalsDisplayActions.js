import { SHOW_GOAL_EDIT_MODAL, SHOW_MAIN_LIST, SET_GOAL_TO_EDIT } from "./types";

export const showGoalEditModal = (showGoalEditModal, goalIdToEdit) => dispatch => {
    return dispatch({
        type: SHOW_GOAL_EDIT_MODAL, 
        payload: {
            showGoalEditModal: showGoalEditModal,
            goalIdToEdit: goalIdToEdit
        }
    })
}

export const showMainList = showMainList => dispatch => {
    console.log(showMainList);
    return dispatch({
        type: SHOW_MAIN_LIST, 
        payload: {
            showMainList: showMainList
        }
    })
}

export const setGoalToEdit = goalIdToEdit => dispatch => {
    return dispatch({
        type: SET_GOAL_TO_EDIT, 
        payload: {
            goalIdToEdit: goalIdToEdit
        }
    })
}

