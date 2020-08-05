import { CREATE_NOTE, GET_NOTES, NOTES_ERROR } from "../actions/types";

const initialState = {
    notes: {},
    notesError: ""
}

const getNotes = goals => {
    let notes = {};

    for(const goal of goals) {
        notes[goal.id] = goal.notes;
    }

    return notes;
}

export default function(state=initialState, action) {
    const payload = {...action.payload};

    switch(action.type) {
        case CREATE_NOTE: 
            const  { goalIdToEdit, createdNote } = payload;
            console.log("in create note");
            return {
                ...state, 
                notes: {
                    ...state.notes,
                    [goalIdToEdit]: [createdNote, ...state.notes[goalIdToEdit]]
                }
            }

        case GET_NOTES: 
            const notes = getNotes(payload.goals);

            return {
                ...state, 
                notes: notes
            }

        case NOTES_ERROR: 
            return {
                ...state
            }
   
        default: 
            return state;
    }
}