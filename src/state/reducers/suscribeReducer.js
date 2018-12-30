/*
    Reducer del Formulario de Suscripción
*/
import {
    SET_EMAIL_TO_SUSCRIBE,
    SET_ERROR_OF_EMAIL_INVALIDATE,
    SET_LOADING_AT_SUSCRIBE,
    SET_MESSAGE_SUSCRIBE_SUCCESS,
    SET_MESSAGE_SUSCRIBE_ERROR,
    SET_INIT_SUSCRIBE,
} from './../actions/suscribeAction'

export const suscribeReducer = (state = {}, action) => {

    switch(action.type) {

        /*
            Si el tipo de acción es de SuscribeAction.
            Crea un nuevo estado y lo retorna.
        */
        case SET_EMAIL_TO_SUSCRIBE:
        case SET_ERROR_OF_EMAIL_INVALIDATE:
        case SET_LOADING_AT_SUSCRIBE:
        case SET_MESSAGE_SUSCRIBE_SUCCESS:
        case SET_MESSAGE_SUSCRIBE_ERROR:
        case SET_INIT_SUSCRIBE:
        {

            const { suscribe } = action.payload
            console.log(`${action.type}`)
            console.log(suscribe)
            const newState = { ...state, ...suscribe }
            return newState;

        }
        /*
            Si no pertenece a estos, únicamente
            se retorna el estado sin modificar.
        */
        default: {
            return state;
        }

    }

};