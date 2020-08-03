import { DATE_RANGE_CHANGE, SELECTED_DATE_CHANGE } from "./types";


export const dateRangeChange = newRange => dispatch => {
    return dispatch({
        type: DATE_RANGE_CHANGE, 
        payload: {
            newRange: newRange
        }
    })
}

export const selectedDateChange = newDate => dispatch => {
    return dispatch({
        type: SELECTED_DATE_CHANGE, 
        payload: {
            newDate: newDate
        }
    })
}