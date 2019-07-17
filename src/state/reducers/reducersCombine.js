/*
    Combinación de Reducers
*/
import { combineReducers } from 'redux'

import { contentTabsReducer } from './contentTabsReducer'
import { academicListReducer } from './academicListReducer'
import { stickyAppBarReducer } from './stickyAppBarReducer'
import { projectListReducer } from './projectListReducer'
import { signInReducer } from './signInReducer'
import { forgivePasswordReducer } from './forgivePasswordReducer'
import { suscribeReducer } from './suscribeReducer'
import { timelineListReducer } from './timelineListReducer'
import { postReducer } from './post-reducer'

const rootReducer = combineReducers({
    academicList:       academicListReducer,
    projectList:        projectListReducer,
    contentTabs:        contentTabsReducer,
    stickyAppBar:       stickyAppBarReducer,
    signIn:             signInReducer,
    forgivePassword:    forgivePasswordReducer,
    suscribe:           suscribeReducer,
    timelineList:       timelineListReducer,
    post:               postReducer,
});

export default rootReducer;