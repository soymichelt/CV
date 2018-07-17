/*
    Reducer de Proyectos
*/
import {
    SET_LOADING_DATA_IN_PROJECT_LIST,
    SET_ERROR_IN_PROJECT_LIST,
    SET_DATA_IN_PROJECT_LIST,
    SET_OPEN_DIALOG_ORDER_BY,
    SET_FILTER_BY_CATEGORY,
} from './../actions/projectListAction'

export const projectListReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_PROJECT_LIST: {
            const { projectList } = action.payload;
            const newState = { ...state, ...projectList }
            return newState;
        }
        case SET_DATA_IN_PROJECT_LIST: {
            const { projectList } = action.payload;
            const newState = { ...state, ...projectList }
            return newState;
        }
        case SET_ERROR_IN_PROJECT_LIST: {
            const { projectList } = action.payload;
            const newState = { ...state, ...projectList }
            return newState;
        }
        case SET_OPEN_DIALOG_ORDER_BY: {
            const { projectList } = action.payload;
            const newState = { ...state, ...projectList }
            return newState;
        }
        case SET_FILTER_BY_CATEGORY: {
            const { projectList } = action.payload;
            const newState = { ...state, ...projectList }
            return newState;
        }
        default: {
            return state;
        }

    }

};