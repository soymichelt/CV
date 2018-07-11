/*
    Action de Tabs
*/

export const SET_TAB_VALUE = 'SET_TAB_VALUE';

const setTabValue = (payload) => ({ type: SET_TAB_VALUE, payload });

export const onChangeTabIndex = (value) => {

    return setTabValue({
        contentTabs: {
            tabValue: value,
        },
    });
    
};