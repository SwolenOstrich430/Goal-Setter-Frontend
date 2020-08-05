import React, { useState, useRef, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { createNote } from "../../actions/notesActions";
import "./index.css";


function CreateNoteForm(props) {
    const [newNote, setNewNote] = useState("");
    const [containerOffset, setContainerOffset] = useState(0);
    const [inputScrollHeight, setInputScrollHeight] = useState(0);
    const [initialScrollVal, setInitialScrollVal] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const goalIdToEdit = useSelector(state => state.goalsDisplayReducers.goalIdToEdit);
    const inputElem = useRef(null);
    

    useEffect(() => {
        handleWindowHeightResize();
    }, []);

    const handleWindowHeightResize = () => {
        let scrollHeight = inputElem.current.scrollHeight;

        setInitialScrollVal(scrollHeight);
        setWindowHeight(window.innerHeight);
        setInputScrollHeight(scrollHeight);
    }

    const handleSubmit = event => {
        if(newNote.length === 0) return;

        if(event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault();

            props.createNote(goalIdToEdit, {text: newNote});
            setNewNote("");
        }

    }

    const handleInputShift = event => {
        inputElem.current.setAttribute("style", "height: inherit");
        inputElem.current.setAttribute("style", `height: ${event.target.scrollHeight}px`);

        if(event.target.scrollHeight !== inputScrollHeight) {
            setContainerOffset((event.target.scrollHeight - initialScrollVal) * -1);
        } 

        setInputScrollHeight(event.target.scrollHeight);
    }

    const handleChange = event => {
        setNewNote(event.target.value);
        handleInputShift(event)
    }

    return (
        <div className="notes-create-note-form-container" style={{"top": `${containerOffset}px`}}>
            <form className="notes-create-note-form">
                <textarea 
                    className="notes-create-note-input"
                    ref={inputElem}
                    type="text" 
                    placeholder="Add a note" 
                    value={newNote}
                    onChange={handleChange}
                    onKeyDown={handleSubmit}
                >
                </textarea>
            </form>
        </div>
    );
}

export default connect(null, { createNote })(CreateNoteForm);