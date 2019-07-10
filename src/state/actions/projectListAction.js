/*
    Action de Proyectos
*/
import { 
    getProjectsQuery,
    getFavsForProjectsQuery,
 } from './../../data/projectListData'

/* Actions Types */
export const SET_LOADING_DATA_IN_PROJECT_LIST   =   'SET_LOADING_DATA_IN_PROJECT_LIST'
export const SET_ERROR_IN_PROJECT_LIST          =   'SET_ERROR_IN_PROJECT_LIST'
export const SET_DATA_IN_PROJECT_LIST           =   'SET_DATA_IN_PROJECT_LIST'
export const SET_OPEN_DIALOG_ORDER_BY           =   'SET_OPEN_DIALOG_ORDER_BY'
export const SET_FILTER_BY_CATEGORY             =   'SET_FILTER_CATEGORY'
export const SET_ITEM_TO_SORT                   =   'SET_ITEM_TO_SORT'
export const SET_ADD_TO_FAVORITE                =   'SET_ADD_TO_FAVORITE'
export const SET_ERROR_IN_ADD_TO_FAVORITE       =   'SET_ERROR_IN_ADD_TO_FAVORITE'

/* Actions Creators */
const setLoadingDataInProjectList   =   (payload) => ({ type: SET_LOADING_DATA_IN_PROJECT_LIST, payload })
const setErrorInProjectList         =   (payload) => ({ type: SET_ERROR_IN_PROJECT_LIST, payload })
const setDataInProjectList          =   (payload) => ({ type: SET_DATA_IN_PROJECT_LIST, payload })
const setOpenDialogOrderBy          =   (payload) => ({ type: SET_OPEN_DIALOG_ORDER_BY, payload })
const setFilterByCategory           =   (payload) => ({ type: SET_FILTER_BY_CATEGORY, payload })
const setItemToSort                 =   (payload) => ({ type: SET_ITEM_TO_SORT, payload })
const setAddToFavorite              =   (payload) =>  ({ type: SET_ADD_TO_FAVORITE, payload })
const setErrorInAddToFavorite       =   (payload) =>  ({ type: SET_ERROR_IN_ADD_TO_FAVORITE, payload })

export const addFav = (projectId, value, IP) => {

    return (dispatch) => {

        getFavsForProjectsQuery(projectId).add({
            date: new Date(),
            IP: IP,
            fav: value,
        })
        .then((docRef) => {
            dispatch(addToFavorite(projectId))
        })
        .catch((error) => {
            dispatch(errorInAddToFavorite(projectId))
        });

    }

}

const addToFavorite = (projectId) => setAddToFavorite({
    favorite: {
        projectId: projectId,
    },
})

const errorInAddToFavorite = (projectId) => setErrorInAddToFavorite({
    favorite: {
        errorInProject: projectId,
    },
})

export const getProjectList = (unsuscribe = false) => {
    return (dispatch, getState) => {
        dispatch(loadingProjectList())

        const query = getProjectsQuery()

        if(!unsuscribe) {

            query.onSnapshot(function() {})
            query.onSnapshot((snapshot) => {

                dispatch(loadingProjectList())
                const projects = extractProjectsList(getState)
                snapshot.docChanges().forEach((change) => {
                    const { doc } = change;
                    const data = extractProjectData(doc)
                    updateProjects(projects, data, change.type)
                });
                dispatch(pushProjectList(projects))
    
            }, (error) => {
                dispatch(errorProjectList())
            })
        }
        else {
            query.onSnapshot(function() {})
        }
    }
}

/*const extractProjectData = (doc) => ({
    uid:                doc.id,
    avatarURL:          doc.data().avatarURL,
    photoURL:           doc.data().photoURL,
    photoDescription:   doc.data().name,
    cardTitle:          doc.data().name,
    cardSubtitle:       doc.data().school,
    cardFavs:           doc.data().favsCount,
    cardShares:         doc.data().sharesCount,
    cardDescription:    doc.data().description,
})*/
const extractProjectData = (doc) => ({
    uid:                doc.id,
    avatarURL:          doc.data().avatarURL,
    createdDate:        doc.data().createdDate,
    data:               doc.data().data,
    favsCount:          doc.data().favsCount,
    modifiedDate:       doc.data().modifiedDate,
    photoURL:           doc.data().photoURL,
    postType:           doc.data().postType,
    sharesCount:        doc.data().sharesCount,
    title:              doc.data().title,
})

const extractProjectsList = (getState) => {
    const { projectList } = getState()
    let { list: projects } = projectList
    if(!projects) {
        projects = []
    }
    return projects
}

const updateProjects = (projects, data, type) => {

    const indexProjectInArray = projects.findIndex(project => project.uid === data.uid);

    switch(type) {

        case 'added':
        case 'modified': {
            if(indexProjectInArray === -1) {
                projects.unshift(data);
            }
            else {
                projects[indexProjectInArray] = data;
            }
            break;
        }
        case 'removed': {
            if(indexProjectInArray !== -1) {
                projects.splice(indexProjectInArray, 1);
            }
            break;
        }
        default: break;

    }

}

const loadingProjectList = () => {

    return setLoadingDataInProjectList({
        projectList: { 
            state: 0,
        }
    });

};

const pushProjectList = (studies) => {

    return setDataInProjectList({
        projectList: {
            state: 1,
            list: studies,
        }
    });

};

const errorProjectList = () => {

    return setErrorInProjectList({
        projectList: {
            state: 2,
        }
    });

};

export const filterByCategory = (category) => {

    return setFilterByCategory({
        category: category,
    });

};

export const openDialogSortBy = (isOpen) => {
    
    return setOpenDialogOrderBy({
        projectList: {
            isOpenDialogOrderBy: isOpen,
        }
    });

};

export const onClickSortItem = (itemToSort) => {

    return setItemToSort({
        academicList: {
            itemToSort,
        },
    });
    
};