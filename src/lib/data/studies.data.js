import { getPublicationsQuery } from './publications.data';

const STUDIES_KEY = 'studies';

const getStudiesQuery = () => {
    return getPublicationsQuery().where('postType', '==', STUDIES_KEY);
};

export const getStudiesDataAsync = async () => {
    const snapshot = await getStudiesQuery().get();
    const studies = [];
    snapshot.forEach(doc => studies.push({
        id: doc.id,
        ...doc.data(),
    }));
    return studies;
};

export const selectStudyDataAsync = async (studyId) => {
    const snapshot = await getStudiesQuery().doc(studyId).get();
    if(snapshot.exists) {
        return {
            ...snapshot.data()
        };
    }
    else {
        throw new Error('No encontrado');
    }
};