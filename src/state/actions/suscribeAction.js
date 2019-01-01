import { getSuscriptionsQuery } from './../../data/suscribeData'

export const SET_EMAIL_TO_SUSCRIBE          =   'SET_EMAIL_TO_SUSCRIBE';
export const SET_ERROR_OF_EMAIL_INVALIDATE  =   'SET_ERROR_IN_EMAIL';
export const SET_LOADING_AT_SUSCRIBE        =   'SET_LOADING_AT_SUSCRIBE';
export const SET_MESSAGE_SUSCRIBE_SUCCESS   =   'SET_MESSAGE_SUSCRIBE_SUCCESS';
export const SET_MESSAGE_SUSCRIBE_ERROR     =   'SET_MESSAGE_SUSCRIBE_ERROR';
export const SET_INIT_SUSCRIBE              =   'SET_INIT_SUSCRIBE';

const setEmailToSuscribe            =   (payload)   =>  ({ type: SET_EMAIL_TO_SUSCRIBE, payload });
const setErrorOfEmailInvalidate     =   (payload)   =>  ({ type: SET_ERROR_OF_EMAIL_INVALIDATE, payload });
const setLoadingAtSuscribe          =   (payload)   =>  ({ type: SET_LOADING_AT_SUSCRIBE, payload });
const setMessageSuscribeSuccess     =   (payload)   =>  ({ type: SET_MESSAGE_SUSCRIBE_SUCCESS, payload });
const setMessageSuscribeError       =   (payload)   =>  ({ type: SET_MESSAGE_SUSCRIBE_ERROR, payload });
const setInitSuscribe               =   (payload)   =>  ({ type: SET_INIT_SUSCRIBE, payload });

export const suscribe = (email) => {
    
    return (dispatch) => {

        dispatch(showLoadingSuscribe())

        getSuscriptionsQuery().add({
            date:       new Date(),
            confirm:    false,
            email:      email,
        })
        .then((docRef) => {
            dispatch(showSuscribeSuccess(`Email suscrito: ${email}`))
        })
        .catch((error) => {
            dispatch(showSuscribeError(`Ha ocurrido un error al intentar suscribir`))
        })

    }

};

export const onEmailChange = (email) => {

    return setEmailToSuscribe({
        suscribe: {
            email: email,
        }
    });

};

export const emailError = (errorMessage) => {

    return setErrorOfEmailInvalidate({
        suscribe: {
            emailInvalidateError: errorMessage,
        },
    });

};

const showLoadingSuscribe = () => {

    return setLoadingAtSuscribe({
        suscribe: {
            state: 1,
        },
    });

};

const showSuscribeSuccess = (successMessage) => {

    return setMessageSuscribeSuccess({
        suscribe: {
            email: '',
            state: 2,
            suscribeMessage: successMessage,
        },
    });

};

const showSuscribeError = (errorMessage) => {

    return setMessageSuscribeError({
        suscribe: {
            state: 3,
            suscribeMessage: errorMessage,
        },
    });

};

export const initSuscribe = () => {

    return setInitSuscribe({
        suscribe: {
            state: 0,
            suscribeMessage: '',
        },
    });
    
};