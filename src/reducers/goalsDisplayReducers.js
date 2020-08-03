import { SHOW_GOAL_EDIT_MODAL, SHOW_MAIN_LIST, SET_GOAL_TO_EDIT } from "../actions/types";

const initialState = {
    showGoalEditModal: false, 
    goalIdToEdit: null,
    showMainList: true
}

export default function(state=initialState, action) {
    const payload = { ...action.payload };

    switch(action.type) {
        case SHOW_GOAL_EDIT_MODAL:
            return {
                ...state, 
                showGoalEditModal: action.payload.showGoalEditModal,
                goalIdToEdit: action.payload.goalIdToEdit
        }

        case SHOW_MAIN_LIST: 
            console.log(payload.showMainList);
            return {
                ...state, 
                showMainList: payload.showMainList
            }

        case SET_GOAL_TO_EDIT: 
            return {
                state, 
                goalIdToEdit: payload.goalIdToEdit
            }

        default: 
            return state;

    }
}