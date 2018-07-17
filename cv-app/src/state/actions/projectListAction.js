/*
    Action de Proyectos
*/

export const SET_LOADING_DATA_IN_PROJECT_LIST = 'SET_LOADING_DATA_IN_PROJECT_LIST';
export const SET_ERROR_IN_PROJECT_LIST = 'SET_ERROR_IN_PROJECT_LIST';
export const SET_DATA_IN_PROJECT_LIST = 'SET_DATA_IN_PROJECT_LIST';
export const SET_OPEN_DIALOG_ORDER_BY = 'SET_OPEN_DIALOG_ORDER_BY';
export const SET_FILTER_BY_CATEGORY = 'SET_FILTER_CATEGORY';
export const SET_ITEM_TO_SORT = 'SET_ITEM_TO_SORT';

const setLoadingDataInProjectList = (payload) => ({ type: SET_LOADING_DATA_IN_PROJECT_LIST, payload });
const setErrorInProjectList = (payload) => ({ type: SET_ERROR_IN_PROJECT_LIST, payload });
const setDataInProjectList = (payload) => ({ type: SET_DATA_IN_PROJECT_LIST, payload });
const setOpenDialogOrderBy = (payload) => ({ type: SET_OPEN_DIALOG_ORDER_BY, payload });
const setFilterByCategory = (payload) => ({ type: SET_FILTER_BY_CATEGORY, payload });
const setItemToSort = (payload) => ({ type: SET_ITEM_TO_SORT, payload });

export const setLoadingProjectList = () => {

    return setLoadingDataInProjectList({
        projectList: {
            state: 0,
        }
    });

};

export const setProjectList = (projects) => {

    return setDataInProjectList({
        projectList: {
            state: 1,
            list: projects,
        }
    });

};

export const setErrorProjectList = () => {

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