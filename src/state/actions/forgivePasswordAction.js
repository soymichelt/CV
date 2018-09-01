/*
    Action de Olvidar Contraseña
*/

export const SET_START_FORGIVE_PASSWORD =  'SET_START_FORGIVE_PASSWORD';
export const SET_END_FORGIVE_PASSWORD = 'SET_END_FORGIVE_PASSWORD';
export const SET_ERROR_WHEN_FORGIVE_PASSWORD = 'SET_ERROR_WHEN_FORGIVE_PASSWORD';

const setStartForgivePassword = (payload) => ({ type: SET_START_FORGIVE_PASSWORD, payload });
const setEndForgivePassword = (payload) => ({ type: SET_END_FORGIVE_PASSWORD, payload });
const setErrorWhenForgivePassword = (payload) => ({ type: SET_ERROR_WHEN_FORGIVE_PASSWORD, payload });

export const forgivePasswordStarted = () => {

    return setStartForgivePassword({
        forgivePassword: {
            isLoading: true,
        },
    });

};

export const forgivePasswordFinalized = () => {

    return setEndForgivePassword({
        forgivePassword: {
            isLoading: false,
        },
    });

};

export const forgivePasswordError = (message, isError) => {

    return setErrorWhenForgivePassword({
        forgivePassword: {
            message: message,
            isError: isError,
        },
    });
    
};