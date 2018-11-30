/*
    Action del Timeline
*/

export const SET_LOADING_DATA_IN_TIMELINE_LIST = 'SET_LOADING_DATA_IN_TIMELINE_LIST';
export const SET_ERROR_IN_TIMELINE_LIST = 'SET_ERROR_IN_TIMELINE_LIST';
export const SET_DATA_IN_TIMELINE_LIST = 'SET_DATA_IN_TIMELINE_LIST';
export const SET_PAGINATION_VALUE = 'SET_PAGINATION_VALUE';

const setLoadingDataInTimelineList = (payload) => ({ type: SET_LOADING_DATA_IN_TIMELINE_LIST, payload });
const setErrorInTimelineList = (payload) => ({ type: SET_ERROR_IN_TIMELINE_LIST, payload });
const setDataInTimelineList = (payload) => ({ type: SET_DATA_IN_TIMELINE_LIST, payload });
const setPaginationValue = (payload) => ({ type: SET_PAGINATION_VALUE, payload });

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

export const setErrorTimelineList = () => {

    return setErrorInTimelineList({
        timelineList: {
            state: 2,
        }
    });

};

export const setPaginationTimelineList = (paginationIndex) => {

    return setPaginationValue({
        timelineList: {
            pagination: paginationIndex,
        },
    });

};