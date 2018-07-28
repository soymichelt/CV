/*
    Action de Cambiar Password
*/

export const SET_START_CHANGE =  'SET_START_CHANGE';
export const SET_END_CHANGE = 'SET_END_CHANGE';
export const SET_ERROR_WHEN_CHANGE = 'SET_ERROR_WHEN_CHANGE';

const setStartChangePassword = (payload) => ({ type: SET_START_CHANGE, payload });
const setEndChangePassword = (payload) => ({ type: SET_END_CHANGE, payload });
const setErrorWhenChangePassword = (payload) => ({ type: SET_ERROR_WHEN_CHANGE, payload });

export const changePasswordStarted = () => {

    return setStartChangePassword({
        changePassword: {
            isLoading: true,
        },
    });

};

export const ChangePasswordFinalized = () => {

    return setEndChangePassword({
        changePassword: {
            isLoading: false,
        },
    });

};

export const ChangePasswordError = (error) => {

    return setErrorWhenChangePassword({
        changePassword: {
            error: error,
        },
    });
    
};