/*
    Reducer de Inicio de Sesión
*/

import {
    SET_START_CHANGE,
    SET_END_CHANGE,
    SET_ERROR_WHEN_CHANGE,
}
from './../actions/changePasswordAction'

export const changePasswordReducer = (state = {}, action) => {
    
    switch (action.type) {
        case SET_START_CHANGE: {

            const { changePassword } = action.payload;
            const newState = { ...state, ...changePassword };
            return newState;
        }
        case SET_END_CHANGE: {

            const { changePassword } = action.payload;
            const newState = { ...state, ...changePassword };
            return newState;
        }
        case SET_ERROR_WHEN_CHANGE: {

            const { changePassword } = action.payload;
            const newState = { ...state, ...changePassword };
            return newState;
        }
        default:
            return state;
    }

};