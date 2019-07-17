/*
    Reducer de Datos Académicos
*/
import {
    SET_LOADING_DATA_IN_POST,
    SET_ERROR_IN_POST,
    SET_DATA_IN_POST,
} from './../actions/post-action'

export const postReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_POST:
        case SET_DATA_IN_POST:
        case SET_ERROR_IN_POST: {
            const { post } = action.payload;
            const newState = { ...state, ...post }
            return newState;
        }
        default: {
            return state;
        }

    }

};