/*
    Action de Datos Académicos
*/
import { getStudiesQuery, getFavsForStudiesQuery } from './../../data/academicListData'

/* Action Type's */
export const SET_LOADING_DATA_IN_ACADEMIC_LIST  =   'SET_LOADING_DATA_IN_ACADEMIC_LIST'
export const SET_ERROR_IN_ACADEMIC_LIST         =   'SET_ERROR_IN_ACADEMIC_LIST'
export const SET_DATA_IN_ACADEMIC_LIST          =   'SET_DATA_IN_ACADEMIC_LIST'
export const SET_OPEN_DIALOG_ORDER_BY           =   'SET_OPEN_DIALOG_ORDER_BY'
export const SET_FILTER_BY_CATEGORY             =   'SET_FILTER_CATEGORY'
export const SET_ITEM_TO_SORT                   =   'SET_ITEM_TO_SORT'
export const SET_ADD_TO_FAVORITE                =   'SET_ADD_TO_FAVORITE'
export const SET_ERROR_IN_ADD_TO_FAVORITE       =   'SET_ERROR_IN_ADD_TO_FAVORITE'

/* Action Creators */
const setLoadingDataInAcademicList  = (payload) =>  ({ type: SET_LOADING_DATA_IN_ACADEMIC_LIST, payload });
const setErrorInAcademicList        = (payload) =>  ({ type: SET_ERROR_IN_ACADEMIC_LIST, payload });
const setDataInAcademicList         = (payload) =>  ({ type: SET_DATA_IN_ACADEMIC_LIST, payload });
const setOpenDialogOrderBy          = (payload) =>  ({ type: SET_OPEN_DIALOG_ORDER_BY, payload });
const setFilterByCategory           = (payload) =>  ({ type: SET_FILTER_BY_CATEGORY, payload });
const setItemToSort                 = (payload) =>  ({ type: SET_ITEM_TO_SORT, payload });
const setAddToFavorite              = (payload) =>  ({ type: SET_ADD_TO_FAVORITE, payload })
const setErrorInAddToFavorite       = (payload) =>  ({ type: SET_ERROR_IN_ADD_TO_FAVORITE, payload })

export const addFav = (studyId, value, IP) => {

    return (dispatch) => {

        getFavsForStudiesQuery(studyId).add({
            date: new Date(),
            IP: IP,
            fav: value,
        })
        .then((docRef) => {
            dispatch(addToFavorite(studyId))
        })
        .catch((error) => {
            dispatch(errorInAddToFavorite(studyId))
        });

    }

}

const addToFavorite = (studyId) => setAddToFavorite({
    favorite: {
        studyId: studyId,
    },
})

const errorInAddToFavorite = (studyId) => setErrorInAddToFavorite({
    favorite: {
        errorInStudy: studyId,
    },
})

export const getAcademicList = (category = '', unsuscribe = false) => {
    return (dispatch, getState) => {
        dispatch(loadingAcademicList())

        const query = getStudiesQuery(category)

        if(!unsuscribe) {

            query.onSnapshot(function() {})
            query.onSnapshot((snapshot) => {

                dispatch(loadingAcademicList())
                const studies = extractStudiesList(getState)
                snapshot.docChanges().forEach((change) => {
                    const { doc } = change;
                    const data = extractStudyData(doc)
                    updateStudies(studies, data, change.type)
                });
                dispatch(pushAcademicList(studies))
    
            }, (error) => {
                dispatch(errorAcademicList())
            })
        }
        else {
            query.onSnapshot(function() {})
        }
    }
}

const extractStudyData = (doc) => ({
    uid:                doc.id,
    avatarURL:          doc.data().avatarURL,
    photoURL:           doc.data().photoURL,
    photoDescription:   doc.data().name,
    cardTitle:          doc.data().name,
    cardSubtitle:       doc.data().school,
    cardFavs:           doc.data().favsCount,
    cardShares:         doc.data().sharesCount,
    cardDescription:    doc.data().description,
})

const extractStudiesList = (getState) => {
    const { academicList } = getState()
    let { list: studies } = academicList
    if(!studies) {
        studies = []
    }
    return studies
}

const updateStudies = (studies, data, type) => {
    if(type === 'added') {
        studies.unshift(data)
    } else {

        const studyToChange = studies.find(item => item.uid === data.uid)

        let indexStudyInArray = studies.indexOf(studyToChange)

        console.log(indexStudyInArray)

        if(type === 'modified') {
            if(indexStudyInArray > -1) {
                studies[indexStudyInArray] = data
            } else {
                studies.unshift(data)
            }
        }
        else if(type === 'remove') {
            if(indexStudyInArray > -1) {
                studies.splice(indexStudyInArray, 1)
            }
        }
    }
}

const loadingAcademicList = () => {

    return setLoadingDataInAcademicList({
        academicList: { 
            state: 0,
        }
    });

};

const pushAcademicList = (studies) => {

    return setDataInAcademicList({
        academicList: {
            state: 1,
            list: studies,
        }
    });

};

const errorAcademicList = () => {

    return setErrorInAcademicList({
        academicList: {
            state: 2,
        }
    });

};

export const filterByCategory = (category) => {

    return setFilterByCategory({
        academicList: {
            category: category,
        },
    });

};

export const openDialogSortBy = (isOpen) => {
    
    return setOpenDialogOrderBy({
        academicList: {
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