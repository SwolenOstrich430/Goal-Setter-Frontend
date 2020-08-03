import { CREATE_TASK } from "../actions/types";

const initialState = {
    tasks: {}
}


export default function(state=initialState, action) {
    const payload = {...action.payload};


    switch(action.type) {
        case CREATE_TASK: 
            return {
                ...state, 
            tasks: {
                ...state.tasks, 
                [payload.goalId]: [state.tasks[payload.goalId], payload.task]
            }
        }
   
        default: 
            return state;
    }
}