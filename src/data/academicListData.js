import { getDb } from './firestore'

export const getStudiesQuery = (category = '') => {
    const db = getDb()
    if(category) {
        db.collection('studies').where('category', '==', category)
    }
    else {
        return db.collection('studies')
    }
}

export const getFavsForStudiesQuery = (studyId) => {
    const db = getDb()
    return db.collection('studies').doc(studyId).collection('favs')
}