import { combineReducers } from "redux";
import navbarReducers from "./navbarReducers";
import authReducers from "./authReducers";
import goalsReducers from "./goalsReducers"
import goalsDisplayReducers from "./goalsDisplayReducers";
import tasksReducers from "./tasksReducers";
import notesReducers from "./notesReducers";
import calendarReducers from "./calendarReducers";


export default combineReducers({
    navbarReducers, 
    authReducers, 
    goalsReducers, 
    goalsDisplayReducers, 
    tasksReducers, 
    notesReducers, 
    calendar: calendarReducers
})
