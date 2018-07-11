/*
    Action de Datos Académicos
*/

export const SET_LOADING_DATA_IN_ACADEMIC_LIST = 'SET_LOADING_DATA_IN_ACADEMIC_LIST';
export const SET_ERROR_IN_ACADEMIC_LIST = 'SET_ERROR_IN_ACADEMIC_LIST';
export const SET_DATA_IN_ACADEMIC_LIST = 'SET_DATA_IN_ACADEMIC_LIST';
export const SET_OPEN_DIALOG_ORDER_BY = 'SET_OPEN_DIALOG_ORDER_BY';
export const SET_FILTER_BY_CATEGORY = 'SET_FILTER_CATEGORY';
export const SET_ITEM_TO_SORT = 'SET_ITEM_TO_SORT';

const setLoadingDataInAcademicList = (payload) => ({ type: SET_LOADING_DATA_IN_ACADEMIC_LIST, payload });
const setErrorInAcademicList = (payload) => ({ type: SET_ERROR_IN_ACADEMIC_LIST, payload });
const setDataInAcademicList = (payload) => ({ type: SET_DATA_IN_ACADEMIC_LIST, payload });
const setOpenDialogOrderBy = (payload) => ({ type: SET_OPEN_DIALOG_ORDER_BY, payload });
const setFilterByCategory = (payload) => ({ type: SET_FILTER_BY_CATEGORY, payload });
const setItemToSort = (payload) => ({ type: SET_ITEM_TO_SORT, payload });

export const setLoadingAcademicList = () => {

    return setLoadingDataInAcademicList({
        academicList: { 
            state: 0,
        }
    });

};

export const setAcademicList = (studies) => {

    return setDataInAcademicList({
        academicList: {
            state: 1,
            list: studies,
        }
    });

};

export const setErrorAcademicList = () => {

    return setErrorInAcademicList({
        academicList: {
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