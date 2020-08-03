import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import CalendarHeader from "../../components/calendar-header"
import CalendarBody from "../../components/calendar-body";
import CalendarSide from "../../components/calendar-side";
import config from "./config.js";
import buildCalendarDisplayFormatter from "./buildCalendarDisplayFormatter";
import CalendarDisplayFormatter from "./buildCalendarDisplayFormatter";

function CalendarPage() {
    const goals = useSelector(state => state.goalsReducers.goals);
    const { range, selectedDate } = useSelector(state => state.calendar);
    const displayFormatter = buildCalendarDisplayFormatter(goals, config.dateFormat, 
                                selectedDate, range);

    return (
        <div className="calendar-container">
            <div className="calendar-main-container">
                <CalendarHeader ranges={config.ranges}/>
                <CalendarBody taskMap={displayFormatter.getTaskMap()}/>
            </div>
            <div className="calendar-side-container">
                <CalendarSide/>
            </div>
        </div>
    )
}


export default CalendarPage;