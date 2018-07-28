/*
    Reducer de Olvidar Contraseña
*/

import {
    SET_START_FORGIVE_PASSWORD,
    SET_END_FORGIVE_PASSWORD,
    SET_ERROR_WHEN_FORGIVE_PASSWORD,
}
from '../actions/forgivePasswordAction'

export const forgivePasswordReducer = (state = {}, action) => {
    
    switch (action.type) {
        case SET_START_FORGIVE_PASSWORD: {

            const { forgivePassword } = action.payload;
            const newState = { ...state, ...forgivePassword };
            return newState;
        }
        case SET_END_FORGIVE_PASSWORD: {

            const { forgivePassword } = action.payload;
            const newState = { ...state, ...forgivePassword };
            return newState;
        }
        case SET_ERROR_WHEN_FORGIVE_PASSWORD: {

            const { forgivePassword } = action.payload;
            const newState = { ...state, ...forgivePassword };
            return newState;
        }
        default:
            return state;
    }

};