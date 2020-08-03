import React from "react";
import { connect } from "react-redux";
import "./index.css";
import FilterContentButton from "../goals-filter-main-content-button";
import { showMainList } from "../../actions/goalsDisplayActions";

function GoalsMainContentFilter(props) {
    return (
        <div className="goal-main-content-filter-container">
            <FilterContentButton text="List" handleClick={() => props.showMainList(true)}/>
            <FilterContentButton text="Kanban" handleClick={() => props.showMainList(false)}/>
        </div>
        
    )
}

export default connect(null, { showMainList })(GoalsMainContentFilter);