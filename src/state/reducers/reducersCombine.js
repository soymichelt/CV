/*
    Combinación de Reducers
*/
import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { contentTabsReducer } from './contentTabsReducer'
import { academicListReducer } from './academicListReducer'
import { stickyAppBarReducer } from './stickyAppBarReducer'
import { projectListReducer } from './projectListReducer'
import { timelineListReducer } from './timelineListReducer'
import { signInReducer } from './signInReducer'
import { forgivePasswordReducer } from './forgivePasswordReducer'

const rootReducer = combineReducers({
    form: formReducer,
    academicList: academicListReducer,
    projectList: projectListReducer,
    contentTabs: contentTabsReducer,
    timelineList: timelineListReducer,
    stickyAppBar: stickyAppBarReducer,
    signIn: signInReducer,
    forgivePassword: forgivePasswordReducer,
});

export default rootReducer;