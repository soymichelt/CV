import { getDb } from './firestore'

export const getStudiesQuery = () => {
    const db = getDb()
    return db.collection('posts').where("postType", "==", "studies")
}

export const getFavsForStudiesQuery = (studyId) => {
    return getStudiesQuery().doc(studyId).collection('favs')
}