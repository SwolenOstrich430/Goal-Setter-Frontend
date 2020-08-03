import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTask } from "../../actions/goalsActions";
import { Draggable } from "react-beautiful-dnd"
import './index.css';


function KanbanCard(props) {
    const opacityStyle = props.task.completed ? {"opacity": 1} : {"": ""};

    return (
        <Draggable draggableId={props.draggableId} index={props.index}>
        {(provided) => (
            <div className="kanbard-card-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className="kanban-card-is-done-container">
                    <div className="kanban-card-is-done-check-box">
                        <div style={opacityStyle} className="kanban-card-is-done-checkmark"></div>
                    </div>
                </div>
                <div className="kanban-card-info-container">
                    {props.task.title}
                </div>
            </div>
        )}
        </Draggable>
    )
}

export default connect(null, { updateTask })(KanbanCard);