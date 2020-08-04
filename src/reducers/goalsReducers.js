import { getGoalToEditAndIndex } from "../helpers/goalHelpers";
import { GET_GOALS, CREATE_GOAL, GOALS_ERROR,
         UPDATE_GOAL, DELETE_GOAL, 
        UPDATE_TASK, UPDATE_GOAL_ORDER, 
        UPDATE_TASK_ORDER} from "../actions/types";

const initialState = {
    goals: [], 
    goalsErrorMessage: "", 
    goalsError: {}, 
}

export default function(state=initialState, action) {
    const payload = {...action.payload};
    const filterGoals = id => state.goals.filter(goal => goal.id !== id);

    const filterTasks = (goalId, taskId) => {
        let [index, goalToEdit] = getGoalToEditAndIndex(goalId, state.goals);
        goalToEdit.tasks = goalToEdit.tasks.filter(task => task.id !== taskId);

        let filteredGoals = filterGoals(goalId);
        filteredGoals.splice(index, 0, goalToEdit);

        return filteredGoals;
    }

    const setTasks = (goalId, tasks) => {
        let [index, goalToEdit] = getGoalToEditAndIndex(goalId, state.goals);
        goalToEdit.tasks = tasks;

        let filteredGoals = filterGoals(goalId);
        filteredGoals.splice(index, 0, goalToEdit);

        return filteredGoals;
    }

    const getUpdatedGoal = (goalId, editedTask) => {
        let goalIndex = 0;
        
        for(const [i, goal] of state.goals.entries()) {
            if(goal.id === goalId) {
                goalIndex = i;
            }
        }

        let [taskIndexToChange, ] = getGoalToEditAndIndex(editedTask.id, state.goals[goalIndex].tasks);

        let newGoals = filterTasks(goalId, editedTask.id);
        newGoals[goalIndex].tasks.splice(taskIndexToChange, 0, editedTask);

        return newGoals;
    }



    switch(action.type) {
        case GET_GOALS: 
            return {
                ...state, 
                goals: payload.goals
            }
        case CREATE_GOAL: 
            return {
                ...state, 
                goals: [...state.goals, payload.createdGoal]
            }
        case UPDATE_GOAL:
            const goalsMinusUpdateGoal = filterGoals(payload.updatedGoal.id);

            return {
                ...state, 
                goals: [...goalsMinusUpdateGoal, payload.updatedGoal]
            } 

        case UPDATE_GOAL_ORDER: 
            return {
                ...state,
                goals: payload.goals
            }

        case DELETE_GOAL:
            const filteredGoals = filterGoals(payload.goalIdToDelete);
            
            return {
                ...state, 
                goals: filteredGoals
            } 
        case GOALS_ERROR:
            return {
                ...state
            } 
    
        case UPDATE_TASK: 
            return {
                ...state, 
                goals: getUpdatedGoal(payload.goalId, payload.editedTask)

            }

        case UPDATE_TASK_ORDER: 
            return {
                ...state,
                goals: setTasks(payload.goalId, payload.tasks)
            }

        default: 
            return state;
    }
}