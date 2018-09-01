/*
    Reducer de Inicio de Sesión
*/

import {
    SET_START_SIGNIN,
    SET_END_SIGNIN,
    SET_ERROR_WHEN_SIGNIN,
    SET_USER_ACCOUNT
}
from './../actions/signInAction'

export const signInReducer = (state = {}, action) => {
    
    switch (action.type) {
        case SET_START_SIGNIN: {

            const { signin } = action.payload;
            const newState = { ...state, ...signin };
            return newState;
        }
        case SET_END_SIGNIN: {

            const { signin } = action.payload;
            const newState = { ...state, ...signin };
            return newState;
        }
        case SET_ERROR_WHEN_SIGNIN: {

            const { signin } = action.payload;
            const newState = { ...state, ...signin };
            return newState;
        }
        case SET_USER_ACCOUNT: {

            const { userAccount } = action.payload;
            const newState = { ...state, ...userAccount };
            return newState;
        }
        default:
            return state;
    }

};