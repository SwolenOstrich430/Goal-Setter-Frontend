import { CREATE_TASK, GET_TASKS, DELETE_TASK } from "../actions/types";

const initialState = {
    tasks: {}
}

const getTasksMap = goals => {
    let tasks = {};

    for(const goal of goals) {
        tasks[goal.id] = goal.tasks;
    }

    return tasks;
}

const filterTasks = (tasks, goalId, taskId) => {
    let tasksCopy = JSON.parse(JSON.stringify(tasks));
    const filteredTasks = tasksCopy[goalId].filter(task => task.id !== taskId);
    tasksCopy[goalId] = filteredTasks;

    return tasksCopy;
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

        case GET_TASKS:
            return {
                ...state,
                tasks: getTasksMap(payload.goals)
            }
   
        case DELETE_TASK: 
            return {
                ...state, 
                tasks: filterTasks(state.tasks, payload.goalId, payload.taskId)
            }

        default: 
            return state;
    }
}