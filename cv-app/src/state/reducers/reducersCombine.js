/*
    Combinación de Reducers
*/
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { contentTabsReducer } from './contentTabsReducer'
import { academicListReducer } from './academicListReducer'

const rootReducer = combineReducers({
    academicList: academicListReducer,
    contentTabs: contentTabsReducer,
    form: formReducer,
});

export default rootReducer;