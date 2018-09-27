/*
    Reducer del Timeline
*/
import {
    SET_LOADING_DATA_IN_TIMELINE_LIST,
    SET_NOTFOUND_DATA_IN_TIMELINE_LIST,
    SET_ERROR_IN_TIMELINE_LIST,
    SET_DATA_IN_TIMELINE_LIST,
    SET_OPEN_DIALOG_ORDER_BY,
    SET_FILTER_BY_CATEGORY,
} from './../actions/timelineListAction'

export const timelineListReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_TIMELINE_LIST: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        case SET_DATA_IN_TIMELINE_LIST: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        case SET_NOTFOUND_DATA_IN_TIMELINE_LIST: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        case SET_ERROR_IN_TIMELINE_LIST: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        case SET_OPEN_DIALOG_ORDER_BY: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        case SET_FILTER_BY_CATEGORY: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        default: {
            return state;
        }

    }

};