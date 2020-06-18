import { db } from './config/firestore.config';

const PUBLICATIONS_COLLECTION_KEY = 'posts';

export const getPublicationsQuery = () => {
    return db.collection(PUBLICATIONS_COLLECTION_KEY);
};