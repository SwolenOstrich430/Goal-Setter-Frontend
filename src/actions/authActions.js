import { AUTHENTICATION_FAILURE, AUTHENTICATE_USER, AUTHENTICATION_SUCCESS, LOGOUT_USER } from "./types";
import axios from "axios";

const authenticateUser = authenticationRequest =>  {
   return {
        type: AUTHENTICATE_USER, 
        payload: {
            authenticationRequest, 
            isFetching: true, 
            isAuthenticated: false
        }
    }
}

const recieveAuthentication = (authenticationResponse) => {
    return {
        type: AUTHENTICATION_SUCCESS,
        payload: {
            authenticationRequest: {},
            isFetching: false,
            isAuthenticated: true,
            token: authenticationResponse.token
        }
    }
}
  
const recieveAuthenticationError = (message) => {
    return {
      type: AUTHENTICATION_FAILURE,
      payload: {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: message, 
        authenticationRequest: {}
      }
    }
}

export const attemptAuthentication = authenticationRequest => dispatch => {
    let requestConfig = {
        method: 'POST',
        headers: { 'Content-Type':'application/json', 'Accept': 'application/json' },
        data: authenticationRequest, 
        url: "/users/authenticate"
    }

    dispatch(authenticateUser(authenticationRequest));

    axios.request(requestConfig)
    .then(response => {
        dispatch(recieveAuthentication(response.data));
    })
    .catch(error => {
        dispatch(recieveAuthenticationError(error.message));
    })
}

export const logoutUser = () => dispatch=> {
    localStorage.removeItem("token");

    return dispatch({
        type: LOGOUT_USER, 
        payload: {
            isAuthenticated: false,
            token: ""
        }
    })
}