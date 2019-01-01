import { getDb } from './firestore'

export const getSuscriptionsQuery = () => {
    const db = getDb()
    return db.colletions('suscriptions');
}