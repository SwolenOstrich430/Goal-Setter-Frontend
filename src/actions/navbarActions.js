import { TOGGLE_SIDENAVBAR, SET_LOGIN_SIGN_UP_STATUS } from "./types.js";

export const toggleSideNavbar = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDENAVBAR,
        payload: { }
    })
}

export const setLoginSignUpStatus = (status) => dispatch => {
    dispatch({
        type: SET_LOGIN_SIGN_UP_STATUS,
        payload: { loginSignUpStatus: status }
    })
}