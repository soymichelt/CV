/*
    Action del Timeline
*/

export const SET_LOADING_DATA_IN_TIMELINE_LIST = 'SET_LOADING_DATA_IN_TIMELINE_LIST';
export const SET_NOTFOUND_DATA_IN_TIMELINE_LIST = 'SET_NOTFOUND_DATA_IN_TIMELINE_LIST';
export const SET_ERROR_IN_TIMELINE_LIST = 'SET_ERROR_IN_TIMELINE_LIST';
export const SET_DATA_IN_TIMELINE_LIST = 'SET_DATA_IN_TIMELINE_LIST';
export const SET_OPEN_DIALOG_ORDER_BY = 'SET_OPEN_DIALOG_ORDER_BY';
export const SET_FILTER_BY_CATEGORY = 'SET_FILTER_CATEGORY';
export const SET_ITEM_TO_SORT = 'SET_ITEM_TO_SORT';

const setLoadingDataInTimelineList = (payload) => ({ type: SET_LOADING_DATA_IN_TIMELINE_LIST, payload });
const setNotfoundDataInTimelineList = (payload) => ({ type: SET_NOTFOUND_DATA_IN_TIMELINE_LIST, payload });
const setErrorInTimelineList = (payload) => ({ type: SET_ERROR_IN_TIMELINE_LIST, payload });
const setDataInTimelineList = (payload) => ({ type: SET_DATA_IN_TIMELINE_LIST, payload });
const setOpenDialogOrderBy = (payload) => ({ type: SET_OPEN_DIALOG_ORDER_BY, payload });
const setFilterByCategory = (payload) => ({ type: SET_FILTER_BY_CATEGORY, payload });
const setItemToSort = (payload) => ({ type: SET_ITEM_TO_SORT, payload });

export const setLoadingTimelineList = () => {

    return setLoadingDataInTimelineList({
        timelineList: { 
            state: 0,
        }
    });

};

export const setTimelineList = (studies) => {

    return setDataInTimelineList({
        timelineList: {
            state: 1,
            list: studies,
        }
    });

};

export const setNotfoundTimelineList = () => {

    return setNotfoundDataInTimelineList({
        timelineList: {
            state: 3,
        }
    });
};

export const setErrorTimelineList = () => {

    return setErrorInTimelineList({
        timelineList: {
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
        timelineList: {
            isOpenDialogOrderBy: isOpen,
        }
    });

};

export const onClickSortItem = (itemToSort) => {

    return setItemToSort({
        timelineList: {
            itemToSort,
        },
    });
    
};