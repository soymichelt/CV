import { getDb } from './firestore'

export const getStudiesQuery = () => {
    const db = getDb()
    return db.collection('studies')
}

export const getFavsForStudiesQuery = (studyId) => {
    const db = getDb()
    return db.collection('studies').doc(studyId).collection('favs')
}