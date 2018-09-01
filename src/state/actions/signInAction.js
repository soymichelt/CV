/*
    Action de Inicio de Sesión
*/

export const SET_START_SIGNIN =  'SET_START_SIGNIN';
export const SET_END_SIGNIN = 'SET_END_SIGNIN';
export const SET_ERROR_WHEN_SIGNIN = 'SET_ERROR_WHEN_SIGNIN';
export const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT';

const setStartSignin = (payload) => ({ type: SET_START_SIGNIN, payload });
const setEndSignin = (payload) => ({ type: SET_END_SIGNIN, payload });
const setErrorWhenSignin = (payload) => ({ type: SET_ERROR_WHEN_SIGNIN, payload });
const setUserAccount = (payload) => ({ type: SET_USER_ACCOUNT, payload });

export const signinStarted = () => {

    return setStartSignin({
        signin: {
            isLoading: true,
        },
    });

};

export const signinFinalized = () => {

    return setEndSignin({
        signin: {
            isLoading: false,
        },
    });

};

export const signinError = (error) => {

    return setErrorWhenSignin({
        signin: {
            error: error,
        },
    });
    
};

export const authorized = (user) => {

    return setUserAccount({
        userAccount: {
            ...user
        },
    });

};