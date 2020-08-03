import React, { useEffect } from "react";
import "./index.css";
import KanbanBoard from "../../components/goals-kanban-board";
import GoalsList from "../../components/goals-main-list";
import { useSelector } from "react-redux";
import GoalEditModal from "../../components/goals-edit-container";
import MainContentFilter from "../../components/goals-filters-container";
import TasksKanbanBoard from "../../components/tasks-kanban-board";
import goalHelpers from "../../helpers/goalDisplay";


function Goals(props) {

    const showGoalEditModal = useSelector(store => store.goalsDisplayReducers.showGoalEditModal);
    const showMainList = useSelector(store => store.goalsDisplayReducers.showMainList);
    const goalIdToEdit = useSelector(store => store.goalsDisplayReducers.goalIdToEdit);
    console.log("render")    

    return (
        <div className="goals-page-container">
            <MainContentFilter/>
            <div className="goals-main-content-container">
                {showMainList ? 
                    <GoalsList/> : 
                    (goalIdToEdit ? 
                        <TasksKanbanBoard 
                            statuses={["Not Started", "Started"]} 
                            statusMap={{
                                false: "Not Started", 
                                true: "Started"
                            }}
                            statusKey={"completed"}
                        /> : 
                        <KanbanBoard/> 
                    )
                }
            </div>
            {showGoalEditModal && <GoalEditModal/>}
        </div>
    )
}


export default Goals;