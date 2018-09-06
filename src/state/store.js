/*
    Almacen de estado
*/
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

/*
    Reducers
*/
import reducer from './reducers/reducersCombine'

/*
    Estado inicial
*/
const initialState = {
};

/*
    Exportar y crear Store
*/
export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);