import { GET_GOALS, CREATE_GOAL, GOALS_ERROR,
         UPDATE_GOAL, DELETE_GOAL, DELETE_TASK, 
         UPDATE_TASK, GET_NOTES, UPDATE_GOAL_ORDER, 
         UPDATE_TASK_ORDER, GET_TASKS } from "./types";
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
        type: GOALS_ERROR, 
        payload: {
            goalsError: error, 
            goalsErrorMessage: error.message
        }
    })
}

export const getGoals = () => dispatch => {
    const authHeader = getAuthHeader();

    let requestConfig = {
        method: "GET",
        headers: authHeader,
        url: "/goals"
    }

    axios.request(requestConfig)
    .then(response => {

        dispatch({
            type: GET_GOALS, 
            payload: {
                goals: response.data,
            }
        })

        dispatch({
            type: GET_NOTES, 
            payload: {
                goals: response.data
            }
        })

        dispatch({
            type: GET_TASKS, 
            payload: {
                goals: response.data
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const createGoal = newGoal => dispatch => {
    let requestConfig = {
        method: "POST",
        headers: getAuthHeader(),
        url: "/goals", 
        data: newGoal
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: CREATE_GOAL, 
            payload: {
                createdGoal: response.data,
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const updateGoal = goal => dispatch => {
    let requestConfig = {
        method: "PUT",
        headers: getAuthHeader(),
        url: "/goals", 
        data: goal
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: UPDATE_GOAL, 
            payload: {
                updatedGoal: response.data,
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const updateGoalOrder = goals => dispatch => {
    return dispatch({
        type: UPDATE_GOAL_ORDER, 
        payload: {
            goals: goals
        }
    })
}

export const deleteGoal = goalId => dispatch => {
    let requestConfig = {
        method: "DELETE",
        headers: getAuthHeader(),
        url: "/goals",
        params: {id: goalId} 
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: DELETE_GOAL, 
            payload: {
                goalIdToDelete: response.data,
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const deleteTask = (taskId, goalId) => dispatch => {
    let requestConfig = {
        method: "DELETE",
        headers: getAuthHeader(),
        url: "/goals/tasks", 
        params: {taskId: taskId}
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: DELETE_TASK, 
            payload: {
                taskId: response.data.id, 
                goalId: goalId
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const updateTask = (task, goalId) => dispatch => {
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
                editedTask: response.data, 
                goalId: goalId
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}

export const updateTaskOrder = (goalId, tasks) => dispatch => {
    return dispatch({
        type: UPDATE_TASK_ORDER, 
        payload: {
            goalId: goalId,
            tasks: tasks
        }
    })
}