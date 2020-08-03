import React from 'react';
import GoalMainListHeader from "../goals-main-header";
import GoalMainListBody from "../goals-main-list-body";
import "./index.css";


function GoalsMainTable(props) {

  return (
    <div className="goals-main-list-container">
        <GoalMainListHeader/>
        <GoalMainListBody/>
    </div>
  );
}

export default GoalsMainTable;