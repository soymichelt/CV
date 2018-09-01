/*
    Action de StickyAppBar
*/

export const SET_SCROLL_TOP = 'SET_SCROLL_TOP';

const setScrollTop = (payload) => ({ type: SET_SCROLL_TOP, payload });

export const onScrollTop = (value) => {

    return setScrollTop({
        stickyAppBar: {
            scrollTop: value,
        },
    });
    
};