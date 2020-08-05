import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "./index.css";
import KanbanCard from "../goals-kanban-card";
import KanbanGoalCard from "../goals-kanban-goal-card";
import KanbanHeader from "../goals-kanban-header";


function KanbanPanel(props) {
    console.log(props)
    const getStyles = isTask => {
        const goalStyles = {
            width: "22.5%",
            marginRight: "2.5%"
        }

        const taskStyles = {
            width: "35%",
            marginLeft: "40px"
        }

        return isTask ? taskStyles : goalStyles
    }

    const getCards = () => {
        let cards = [];
        let j = 0;

        for(let i = props.indexStart; i < props.indexLimit; i++) {
            props.isTask ? 
            cards.push(
                <KanbanCard
                    draggableId={`${props.cards[j].completed}-${props.cards[j].place}`} 
                    index={props.cards[j].place}
                    task={props.cards[j]}
                    key={`${props.cards[j].completed}-${props.cards[j].place}`}
                />
            ) : 
            cards.push(
                <KanbanGoalCard 
                    draggableId={`${props.cards[j].status}-${props.cards[j].place}`} 
                    index={props.cards[j].place}
                    goal={props.cards[j]}
                    key={`${props.cards[j].status}-${props.cards[j].place}`}
                    transition={false}
                />
            )

            j++;
        }

        return cards;
    }


    return (
        <div style={getStyles(props.isTask)}>
            <KanbanHeader headerTitle={props.header || props.status}/>
            <Droppable key={props.status} droppableId={`${props.status}`}>
                {(provided) => (
                    <div className="kanban-panel-container"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        {...provided.droppablePlaceholder}
                        key={props.status}>
                        {getCards()}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default KanbanPanel;