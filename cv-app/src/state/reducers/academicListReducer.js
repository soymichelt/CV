/*
    Reducer de Datos Académicos
*/
import {
    SET_LOADING_DATA_IN_ACADEMIC_LIST,
    SET_ERROR_IN_ACADEMIC_LIST,
    SET_DATA_IN_ACADEMIC_LIST,
    SET_OPEN_DIALOG_ORDER_BY,
    SET_FILTER_BY_CATEGORY,
} from './../actions/academicListAction'

export const academicListReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_ACADEMIC_LIST: {
            const { academicList } = action.payload;
            const newState = { ...state, ...academicList }
            return newState;
        }
        case SET_DATA_IN_ACADEMIC_LIST: {
            const { academicList } = action.payload;
            const newState = { ...state, ...academicList }
            return newState;
        }
        case SET_ERROR_IN_ACADEMIC_LIST: {
            const { academicList } = action.payload;
            const newState = { ...state, ...academicList }
            return newState;
        }
        case SET_OPEN_DIALOG_ORDER_BY: {
            const { academicList } = action.payload;
            const newState = { ...state, ...academicList }
            return newState;
        }
        case SET_FILTER_BY_CATEGORY: {
            const { academicList } = action.payload;
            const newState = { ...state, ...academicList }
            return newState;
        }
        default: {
            return state;
        }

    }

};