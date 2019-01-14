/*
    Reducer de Proyectos
*/
import {
    SET_LOADING_DATA_IN_PROJECT_LIST,
    SET_ERROR_IN_PROJECT_LIST,
    SET_DATA_IN_PROJECT_LIST,
    SET_OPEN_DIALOG_ORDER_BY,
    SET_FILTER_BY_CATEGORY,
    SET_ITEM_TO_SORT,
    SET_ADD_TO_FAVORITE,
    SET_ERROR_IN_ADD_TO_FAVORITE,
} from './../actions/projectListAction'

export const projectListReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_PROJECT_LIST:
        case SET_DATA_IN_PROJECT_LIST:
        case SET_ERROR_IN_PROJECT_LIST:
        case SET_OPEN_DIALOG_ORDER_BY:
        case SET_FILTER_BY_CATEGORY:
        case SET_ITEM_TO_SORT:
        case SET_ADD_TO_FAVORITE:
        case SET_ERROR_IN_ADD_TO_FAVORITE: {
            const { projectList } = action.payload;
            const newState = { ...state, ...projectList }
            return newState;
        }
        default: {
            return state;
        }

    }

};