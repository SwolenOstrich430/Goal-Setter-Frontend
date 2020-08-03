import React from "react";
import "./index.css";
import KanbanGoalCard from "../goals-kanban-goal-display";
import KanbanPanel from "../goals-kanban-panel";
import { getTaskByPlaceAndStatus } from "../../helpers/goalHelpers";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, connect } from "react-redux";
import { updateTask, updateTaskOrder } from "../../actions/goalsActions";
import goalHelpers from "../../helpers/goalDisplay";


function TasksKanbanBoard(props) {
    const goals = useSelector(state => state.goalsReducers.goals);
    const goalId = useSelector(state => state.goalsDisplayReducers.goalIdToEdit);
    const goal = goalHelpers.getGoalToEdit(goalId, goals);


    const getCardsMap = statuses => {
        let cardsMap = {};

        for(const status of statuses) {
            cardsMap[status] = [];
        }
        return cardsMap;
    }

    const fillBooleanCardsMap = (statusMap, statusKey, cardsMap, items) => {
        let status;

        for(const item of items) {
            status = statusMap[item[statusKey]];
            
            if(cardsMap[status].length > 0) {
                cardsMap[status].push(item);
            } else {
                cardsMap[status] = [item];
            }
        }
    }

    const fillEnumCardsMap = (statusKey, cardsMap, items) => {
        for(const item of items) {
            if(cardsMap[item[statusKey]].length > 0) {
                cardsMap[item[statusKey]].push(item);
            } else {
                cardsMap[item[statusKey]] = [item];
            }
        }
    }

    const getPanels = (statuses, items, statusMap, statusKey) => {
        let panels = [];
        let indexStart = 0;
        let indexLimit = 0;
        let index = 0;
        let itemsCopy = Array.from(items);
        itemsCopy.sort((item1, item2) => (item1.place > item2.place) ? 1 : -1);

        let cardsMap = getCardsMap(statuses);
        statusMap ? 
            fillBooleanCardsMap(statusMap, statusKey, cardsMap, itemsCopy) :
            fillEnumCardsMap(statusKey, cardsMap, itemsCopy)

        for(const status in cardsMap) {
            indexLimit += cardsMap[status].length;

            panels.push(<KanbanPanel 
                index={index} 
                status={status === "Started"} 
                header={status}
                cards={cardsMap[status]}
                indexLimit={indexLimit}
                indexStart={indexStart}
                isTask={true}
                />
            );

            indexStart = indexLimit;
            index++;
        }

        return panels;
    }

    const handleDragEnd = result => {
        const { destination, source } = result;
        console.log(result);
        let tasksCopy = Array.from(goal.tasks);
        let taskToEdit = getTaskByPlaceAndStatus(tasksCopy, source.index, source.droppableId);

        if(!destination) return;
        if(destination.droppableId === source.droppableId && 
            destination.index === source.index) return;
        
        let offset = (destination.index < source.index) ? 1 : -1;

        for(const task of tasksCopy) {
            if(taskToEdit.id === task.id) continue;
            if(destination.droppableId === source.droppableId) {
                if(task.place >= destination.index && task.place < source.index &&
                    offset === 1) {
        
                    task.place += offset;
                    props.updateTask(task, goalId);
                } else if(task.place <= destination.index && task.place > source.index &&
                    offset === -1) {
                    
                    task.place += offset;
                    props.updateTask(task, goalId);
                }
            } else {
                if(task.place > source.index && 
                    task.completed === (source.droppableId === "true")) {

                        task.place--;
                        props.updateTask(task, goalId);
                } else if(task.place >= destination.index && 
                    task.completed === (destination.droppableId === "true")) {

                        task.place++;
                        props.updateTask(task, goalId);
                    }
            }
        }

        taskToEdit.place = destination.index;
        taskToEdit.completed = destination.droppableId === "true";
        props.updateTaskOrder(goalId, tasksCopy);
        props.updateTask(taskToEdit, goalId);
    }

    return (
        <div className="tasks-kanban-board">
            <KanbanGoalCard goal={goal}/>
            <div className="tasks-kanban-board-panel-container">
                <DragDropContext 
                    onDragEnd={handleDragEnd} 
                    children={
                        getPanels(props.statuses, goal.tasks, 
                        props.statusMap, props.statusKey)
                    }
                />
            </div>
        </div>
    )
}

export default connect(null, { updateTask, updateTaskOrder })(TasksKanbanBoard);