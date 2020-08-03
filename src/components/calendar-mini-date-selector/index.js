import React, { useState } from "react";
import "./index.css";
import moment from "moment";


function MiniDateSelector(props) {
    const [displayDate, setDisplayDate] = useState(moment().startOf("month"));   
    
    const setSelectedDate = (dateAsNum, isFiller) => {
        let copyDisplayDate = moment(displayDate);

        if(isFiller) {
            copyDisplayDate.subtract(1, "month");
        }

        props.setCurrDate(copyDisplayDate.add(dateAsNum - 1, "days"));
        props.setShowCalendar(false);
        props.setDateIsSelected(true);
    }

    const getWeekDayAbbrevs = index => {
        let weekDays = moment.weekdays();

        return weekDays.map(weekDay => (
            <p className="calendar-mini-date-selector-weekday-abbrevs" key={weekDay}>
                {weekDay.substring(0, index)}
            </p>
        ))
    }

    const getMonthandYear = () => {
        let date = moment(displayDate);
        date.month();
        return date.format("MMMM YYYY");
    }

    const getNewMonth = offset => {
        let date = moment(displayDate).add(offset, "months");

        return date;
    }

    const getFirstDayOfMonth = () => {
        let startOfMonth = moment(displayDate).startOf('month').day();
        
        return startOfMonth;
    }

    const getNumDaysInMonth = () => moment(displayDate).daysInMonth();

    const getDateFillers = () => {
        let dateFillers = [];
        let lastDayOfPrevMonth = moment(displayDate).subtract(1, "months").daysInMonth();

        for(let i = 0; i < getFirstDayOfMonth(); i ++) {
            dateFillers.unshift(
                <p className="calendar-mini-date-selector-body-main-dates" 
                onClick={() => setSelectedDate(lastDayOfPrevMonth - i, true)} key={lastDayOfPrevMonth - i}>
                    {lastDayOfPrevMonth - i}
                </p>
            )
        }
        
        return dateFillers;
    }

    const getDates = () => {
        let dates = [];

        for(let i = 1; i < getNumDaysInMonth() + 1; i ++) {
            dates.push(
                <p className="calendar-mini-date-selector-body-main-dates"
                onClick={() => setSelectedDate(i, false)} key={i}>
                    {i}
                </p>)
        }

        return dates;
    }

    return (
        <div>
            {props.showCalendar &&
            <div className="calendar-mini-date-selector">
                <div className="calendar-mini-date-selector-header">
                    <div className="calendar-mini-date-selector-navigate-month-button" 
                    onClick={() => setDisplayDate(getNewMonth(-1))}>
                        <img className="calendar-mini-date-selector-navigate-month-icon" 
                        src="./back.svg" alt="back-button"/>
                    </div>
                    <p className="calendar-mini-date-selector-current-month-header">{getMonthandYear()}</p>
                    <div className="calendar-mini-date-selector-navigate-month-button" 
                    onClick={() => setDisplayDate(getNewMonth(1))}>
                        <img src="./next.svg" alt="back-button"/>
                    </div>
                </div>
                <div className="calendar-mini-date-selector-body">
                    <div className="calendar-mini-date-selector-body-sub-header">
                        {getWeekDayAbbrevs(2)}
                    </div>
                    <div className="calendar-mini-date-selector-body-main">
                        {[getDateFillers(), getDates()]}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MiniDateSelector;