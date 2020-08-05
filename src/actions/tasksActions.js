import { CREATE_TASK, UPDATE_TASK, TASKS_ERROR } from "./types";
import axios from "axios";

const getAuthHeader = () => {
    const jwt = localStorage.getItem("token");
    const headers = {
        'Content-Type':'application/json', 
        'Accept': 'application/json', 
        "Authorization": `Bearer ${jwt}` 
    }

    return headers;
}

const sendError = (error, dispatch) => {
    return dispatch({
        type: TASKS_ERROR, 
        payload: {
            goalsError: error, 
            goalsErrorMessage: error.message
        }
    })
}

export const createTask = (goalId, task) => dispatch => {
    
    let requestConfig = {
        method: "POST",
        headers: getAuthHeader(),
        url: "/goals/tasks", 
        data: task,
        params: {goalId: goalId}
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: CREATE_TASK, 
            payload: {
                goalId: goalId,
                task: response.data
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const updateTask = (goalId, task) => dispatch => {
    let requestConfig = {
        method: "PUT",
        headers: getAuthHeader(),
        url: "/goals/tasks", 
        data: task,
        params: {goalId: goalId}
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: UPDATE_TASK, 
            payload: {
                goalId: goalId, 
                task: response.data
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}
