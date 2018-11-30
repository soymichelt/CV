/*
    Reducer del Timeline
*/
import {
    SET_LOADING_DATA_IN_TIMELINE_LIST,
    SET_ERROR_IN_TIMELINE_LIST,
    SET_DATA_IN_TIMELINE_LIST,
    SET_PAGINATION_VALUE,
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
        case SET_ERROR_IN_TIMELINE_LIST: {
            const { timelineList } = action.payload;
            const newState = { ...state, ...timelineList }
            return newState;
        }
        case SET_PAGINATION_VALUE: {
            const { timelineList } = action.payload;
            const newState = {...state, ...timelineList }
            return newState;
        }
        default: {
            return state;
        }

    }

};