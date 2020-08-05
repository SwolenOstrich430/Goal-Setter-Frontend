import { CREATE_TASK, GET_TASKS, DELETE_TASK, UPDATE_TASK } from "../actions/types";
import { getTaskByPlaceAndStatus } from "../helpers/goalHelpers";
import { updateTask } from "../actions/goalsActions";

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

const updateTasks = (tasks, goalId, task) => {
    console.log("got in here");
    console.log(tasks);
    console.log(goalId);
    console.log(tasks[goalId]);
    let replacementIndex = 0;

    for(const currTask of tasks[goalId]) {
        console.log("got in loop")
        console.log(currTask);
        console.log(task);
        if(currTask.id === task.id) break;
        console.log("got below if")
        replacementIndex++;
    }

    console.log("replacement index: " + replacementIndex);

    let tasksCopy = JSON.parse(JSON.stringify(tasks));
    tasksCopy[goalId][replacementIndex] = task;
    console.log(tasksCopy);
    return tasksCopy;
}


export default function(state=initialState, action) {
    const { payload } = action;

    switch(action.type) {
        case CREATE_TASK: 
            return {
                ...state, 
                tasks: {
                    ...state.tasks, 
                    [payload.goalId]: [...state.tasks[payload.goalId], payload.task]
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

        case UPDATE_TASK: 
            return {
                ...state, 
                tasks: updateTasks(state.tasks, payload.goalId, payload.task)
            }

        default: 
            return state;
    }
}