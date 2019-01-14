import { getDb } from './firestore'

export const getProjectsQuery = (category = '') => {
    const db = getDb()
    if(category) {
        db.collection('projects').where('category', '==', category)
    }
    else {
        return db.collection('projects')
    }
}

export const getFavsForProjectsQuery = (studyId) => {
    const db = getDb()
    return db.collection('projects').doc(studyId).collection('favs')
}