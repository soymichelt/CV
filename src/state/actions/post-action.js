/*
    Action de Publicaciones
*/
import { getPostByIdQuery, } from './../../data/post-data'

/* Action Type's */
export const SET_LOADING_DATA_IN_POST  =   'SET_LOADING_DATA_IN_POST'
export const SET_ERROR_IN_POST         =   'SET_ERROR_IN_POST'
export const SET_DATA_IN_POST          =   'SET_DATA_IN_POST'

/* Action Creators */
const setLoadingDataInPost  = (payload) =>  ({ type: SET_LOADING_DATA_IN_POST, payload });
const setErrorInPost        = (payload) =>  ({ type: SET_ERROR_IN_POST, payload });
const setDataInPost         = (payload) =>  ({ type: SET_DATA_IN_POST, payload });

export const getPostById = (postId) => {
    return (dispatch) => {
        dispatch(loadingPost())

        const query = getPostByIdQuery(postId)

        query
        .get()
        .then(doc => {
            const data = extractPostData(doc)
            dispatch(pushPost(data))
        })
        .catch(error => {
            dispatch(errorPost())
        })
    }
}

const extractPostData = (doc) => ({
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

const loadingPost = () => {

    return setLoadingDataInPost({
        post: {
            state: 0,
        }
    });

};

const pushPost = (post) => {

    return setDataInPost({
        post: {
            state: 1,
            data: post,
        }
    });

};

const errorPost = () => {

    return setErrorInPost({
        post: {
            state: 2,
        }
    });

};