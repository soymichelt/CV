import { db } from './config/firestore.config';

const PUBLICATIONS_COLLECTION_KEY = 'publications';

export const getPublicationsQuery = async () => {
    return db.collection(PUBLICATIONS_COLLECTION_KEY);
};