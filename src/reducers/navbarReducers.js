import { SET_LOGIN_SIGN_UP_STATUS, TOGGLE_SIDENAVBAR } from "../actions/types.js";

const initialState = {
    sideNavbarIsHidden: true, 
    loginSignUpStatus: "login"
}

export default function(state=initialState, action) {
    switch(action.type) {
        case TOGGLE_SIDENAVBAR: 
            return {
                ...state, 
                sideNavbarIsHidden: !state.sideNavbarIsHidden
            }
        case SET_LOGIN_SIGN_UP_STATUS:
            return {
                ...state, 
                loginSignUpStatus: action.payload.loginSignUpStatus
            }
        default: 
            return state;
    }
}