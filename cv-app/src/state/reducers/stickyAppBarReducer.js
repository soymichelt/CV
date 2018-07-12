/*
    Reducer de StickyAppBar
*/

import {
    SET_SCROLL_TOP
}
from './../actions/stickyAppBarAction'

export const stickyAppBarReducer = (state = {}, action) => {
    
    switch (action.type) {
        case SET_SCROLL_TOP: {

            const { stickyAppBar } = action.payload;
            const newState = { ...state, ...stickyAppBar };
            return newState;
        }
        default:
            return state;
    }

};