import { AUTHENTICATE_USER, AUTHENTICATION_FAILURE, LOGOUT_USER, AUTHENTICATION_SUCCESS } from "../actions/types.js";

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem("token") ? true : false,
    authenticationRequest: {},
    token: localStorage.getItem("token"), 
    errorMessage: "", 
}

export default function(state=initialState, action) {
    const payload = {...action.payload};

    switch(action.type) {
        case AUTHENTICATE_USER:
            
            return {
                ...state, 
                isFetching: payload.isFetching, 
                isAuthenticated: payload.isAuthenticated, 
                authenticationRequest: payload.authenticationRequest
            }

        case AUTHENTICATION_SUCCESS:
            localStorage.setItem("token", payload.token);

            return {
                ...state, 
                isFetching: payload.isFetching,
                isAuthenticated: payload.isAuthenticated,
                errorMessage: "", 
                token: payload.token
            }

        case AUTHENTICATION_FAILURE:
            return {
                ...state, 
                isFetching: payload.isFetching,
                isAuthenticated: payload.isAuthenticated,
                errorMessage: payload.errorMessage, 
            }

        case LOGOUT_USER: 
            return {
                ...state, 
                isAuthenticated: payload.isAuthenticated, 
                token: payload.token
            }

        default: 
            return state;
    }
}