/*
    Combinación de Reducers
*/
import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { contentTabsReducer } from './contentTabsReducer'
import { academicListReducer } from './academicListReducer'
import { stickyAppBarReducer } from './stickyAppBarReducer'
import { projectListReducer } from './projectListReducer'

const rootReducer = combineReducers({
    academicList: academicListReducer,
    projectList: projectListReducer,
    contentTabs: contentTabsReducer,
    stickyAppBar: stickyAppBarReducer,
    form: formReducer,
});

export default rootReducer;