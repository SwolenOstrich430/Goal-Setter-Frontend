import { DATE_RANGE_CHANGE } from "../actions/types";
import moment from "moment";
import config from "../pages/Calendar/config";

const initialState = {
    range: config.initialRange, 
    selectedDate: moment().format(config.dateFormat)
}

export default function(state=initialState, {payload, type}) {

    switch(type) {
        case DATE_RANGE_CHANGE: 
            return {
                ...state, 
                range: payload.newRange
            }

        default: {
            return state
        }
    }
}