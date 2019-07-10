import { getDb } from './firestore'

export const getProjectsQuery = () => {
    const db = getDb()
    return db.collection('posts').where("postType", "==", "projects")
}

export const getFavsForProjectsQuery = (studyId) => {
    return this.getProjectsQuery().doc(studyId).collection('favs')
}