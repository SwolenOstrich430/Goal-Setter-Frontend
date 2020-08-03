import React from "react";
import { connect, useSelector } from "react-redux";
import { updateGoal, updateGoalOrder } from "../../actions/goalsActions";
import { getGoalByPlaceAndStatus } from "../../helpers/goalHelpers";
import KanbanPanel from "../goals-kanban-panel";
import { DragDropContext } from "react-beautiful-dnd";
import "./index.css";


function KanbanBoard(props) {
    const goals = useSelector(state => state.goalsReducers.goals);
    const statuses = ["Not Started", "In Progress", "Blocked", "Complete"];

    const getPanels = (numPanels=statuses.length) => {
        let panels = [];
        let cardsMap = {};
        let indexStart = 0;
        let indexLimit = 0;
        let index = 0;
        let goalsCopy = Array.from(goals);
        goalsCopy.sort((g1, g2) => (g1.place > g2.place) ? 1 : -1);

        for(const status of statuses) {
            cardsMap[status] = [];
        }

        for(const goal of goalsCopy) {
            if(cardsMap[goal.status].length > 0) {
                cardsMap[goal.status].push(goal);
            } else {
                cardsMap[goal.status] = [goal];
            }
        }

        for(const status in cardsMap) {
            indexLimit += cardsMap[status].length;

            panels.push(<KanbanPanel 
                index={index} 
                status={status} 
                cards={cardsMap[status]}
                indexLimit={indexLimit}
                indexStart={indexStart}/>
            );

            indexStart = indexLimit;
            index++;
        }

        return panels;
    }

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        let goalsCopy = Array.from(goals);
        let goalToEdit = getGoalByPlaceAndStatus(goalsCopy,  source.index, source.droppableId);
        if(!destination) return;
        if(destination.droppableId === source.droppableId && 
            destination.index === source.index) return;

        let offset = (destination.index < source.index) ? 1 : -1;
        
        for(const goal of goalsCopy) {
            if(goalToEdit.id === goal.id) continue;
            if(destination.droppableId === source.droppableId) {
                if(goal.place >= destination.index && goal.place < source.index &&
                    offset === 1 && goal.status === destination.droppableId) {

                    goal.place += offset;
                    props.updateGoal(goal);
                } else if(goal.place <= destination.index && goal.place > source.index &&
                    offset === -1 && goal.status === destination.droppableId) {

                    goal.place += offset;
                    props.updateGoal(goal);
                }
            } else {
                if(goal.status === source.droppableId && goal.place > source.index) {

                        goal.place--;
                        props.updateGoal(goal);
                } else if(goal.status === destination.droppableId && 
                    goal.place >= destination.index) {
                        
                        goal.place++;
                        props.updateGoal(goal);
                    }
            }
        }

        goalToEdit.place = destination.index;
        goalToEdit.status = destination.droppableId;
        props.updateGoalOrder(goalsCopy);
        props.updateGoal(goalToEdit);
    }

    return (
        <div className="kanban-board">
            <DragDropContext onDragEnd={onDragEnd} children={getPanels()}/>
        </div>
    )
}

export default connect(null, { updateGoal, updateGoalOrder })(KanbanBoard);