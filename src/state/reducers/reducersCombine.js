/*
    Combinación de Reducers
*/
import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { contentTabsReducer } from './contentTabsReducer'
import { academicListReducer } from './academicListReducer'
import { stickyAppBarReducer } from './stickyAppBarReducer'
import { projectListReducer } from './projectListReducer'
import { signInReducer } from './signInReducer'
import { forgivePasswordReducer } from './forgivePasswordReducer'
import { timelineListReducer } from './timelineListReducer'

const rootReducer = combineReducers({
    form: formReducer,
    academicList: academicListReducer,
    projectList: projectListReducer,
    contentTabs: contentTabsReducer,
    stickyAppBar: stickyAppBarReducer,
    signIn: signInReducer,
    forgivePassword: forgivePasswordReducer,
    timelineList: timelineListReducer,
});

export default rootReducer;