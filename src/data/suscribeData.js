import { getDb } from './firestore'

export const getSuscriptionsQuery = () => {
    const db = getDb()
    return db.collection('suscriptions');
}