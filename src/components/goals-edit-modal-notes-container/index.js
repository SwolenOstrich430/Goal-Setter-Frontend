import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import NotesHeader from "../goals-edit-modal-notes-header";
import Note from "../goals-edit-modal-note";
import NoteForm from "../goals-edit-modal-notes-form";

function NotesContainer() {
    const notes = useSelector(state => state.notesReducers.notes);
    const goalIdToEdit = useSelector(state => state.goalsDisplayReducers.goalIdToEdit);
    let scrollElem = useRef(null);

    useEffect(() => scrollToBottom(scrollElem));

    const scrollToBottom = elem => {
        if(elem === undefined) return;
        console.log("scroll to bottom");
        elem.current.scrollIntoView();
    }

    return (
        <div className="goals-edit-goal-modal-notes-container">
            <NotesHeader/>
            <div className="goals-edit-modal-notes-body-container">
                <div className="goals-edit-modal-notes-container-dummy-scroll-div" ref={scrollElem}>l</div>
                {notes[goalIdToEdit].map(note => <Note {...note} key={note.id}/>)}
            </div>
            <NoteForm/>
        </div>
    )
}

export default NotesContainer;