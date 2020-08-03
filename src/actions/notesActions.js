import { CREATE_NOTE, NOTES_ERROR } from "./types";
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
        type: NOTES_ERROR, 
        payload: {
            goalsError: error, 
            goalsErrorMessage: error.message
        }
    })
}

export const createNote = (goalId, noteToCreate) => dispatch => {
    const authHeader = getAuthHeader();

    let requestConfig = {
        method: "POST",
        headers: authHeader,
        url: "/notes", 
        data: noteToCreate, 
        params: {goalId: goalId}
    }

    axios.request(requestConfig)
    .then(response => {
        return dispatch({
            type: CREATE_NOTE, 
            payload: {
                createdNote: response.data, 
                goalIdToEdit: goalId
            }
        })
    })
    .catch(error => sendError(error, dispatch));
}