import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { dateRangeChange } from "../../actions/calendarActions";


function CalendarHeader(props) {
    return (
        <div className="calendar-header-container">
            <div className="calendar-header-change-time-period-container">
                 <button className="calendar-header-change-time-period-button">
                    <img className="calendar-header-change-time-icon" 
                         src="./back.svg" alt="back-button"/>
                 </button>
                 <button className="calendar-header-change-time-period-button">
                    <img className="calendar-header-change-time-icon" 
                        src="./next.svg" alt="back-button"/>
                 </button>
            </div>
            <h4 className="calendar-header-date-range-display">March</h4>
            <div className="calendar-header-date-range-selector">
                {props.ranges.map(range => (
                    <button 
                        className="calendar-header-date-range-button"
                        key={range}
                        onClick={() => props.dateRangeChange(range)}
                    >
                        {range}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default connect(null, { dateRangeChange })(CalendarHeader);