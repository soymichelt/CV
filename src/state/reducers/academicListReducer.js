/*
    Reducer de Datos Académicos
*/
import {
    SET_LOADING_DATA_IN_ACADEMIC_LIST,
    SET_ERROR_IN_ACADEMIC_LIST,
    SET_DATA_IN_ACADEMIC_LIST,
    SET_OPEN_DIALOG_ORDER_BY,
    SET_FILTER_BY_CATEGORY,
    SET_ITEM_TO_SORT,
} from './../actions/academicListAction'

export const academicListReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_ACADEMIC_LIST:
        case SET_DATA_IN_ACADEMIC_LIST:
        case SET_ERROR_IN_ACADEMIC_LIST:
        case SET_OPEN_DIALOG_ORDER_BY:
        case SET_FILTER_BY_CATEGORY:
        case SET_ITEM_TO_SORT: {
            const { academicList } = action.payload;
            const newState = { ...state, ...academicList }
            return newState;
        }
        default: {
            return state;
        }

    }

};