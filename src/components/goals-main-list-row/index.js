import React from "react";
import "./index.css";
import GoalListCell from "../goals-main-list-cell";
import GoalPercentageCompleteIcon from "../goals-percentage-complete-icon";
import GoalEditButton from "../goals-goal-edit-button";
import moment from "moment";
const SIZES = ["15", "40", "15", "15", "15"];
const KEYS = ["title", "description", "endDate", "status", "progress"]


function GoalMainListRow(props) {
    const getCellVal = key => {
        let cellVal;

        if(key === "endDate") {
            const dummyDate = moment(props.data[key]).add(1, "days").format("MMM DD YYYY");
            cellVal = dummyDate;
        } else {
            cellVal = props.data[key];
        }

        return cellVal;
    }

    const getPercentTasksComplete = tasks => {
        if(tasks === undefined || tasks.length === 0) return 0;

        let totalComplete = 0;

        for(const task of tasks) {
            if(task.completed) {
                totalComplete++;
            }
        }

        return Math.round(totalComplete / tasks.length * 100);
    }

    const mapKeysToCellValues = () => {
        return KEYS.map((key, i) => {
            if(key === "progress") {
                return (
                    <GoalPercentageCompleteIcon key={key} percentComplete={getPercentTasksComplete(props.tasks)}/>   
               )  
            } else {
                return (
                    <GoalListCell size={SIZES[i]} textValue={getCellVal(key)} 
                    isStatus={key === "status"} key={key}/>
                )
            }
        });
    }

    return (
        <div className="goals-list-row-container">
            {mapKeysToCellValues()}
            <GoalEditButton goalId={props.data.id}/>
        </div>
    )
}


export default GoalMainListRow;