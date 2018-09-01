/*
    Reducer de Tabs
*/

import {
    SET_TAB_VALUE
}
from './../actions/contentTabsAction'

export const contentTabsReducer = (state = {}, action) => {
    
    switch (action.type) {
        case SET_TAB_VALUE: {

            const { contentTabs } = action.payload;
            const newState = { ...state, ...contentTabs };
            return newState;
        }
        default:
            return state;
    }

};