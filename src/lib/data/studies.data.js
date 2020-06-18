import { getPublicationsQuery } from './publications.data';

const STUDIES_KEY = 'studies';

const getStudiesQuery = () => {
    return getPublicationsQuery().where('postType', '==', STUDIES_KEY);
};

export const getCategoriesData = () => {
    return [
        { id: '0', name: 'Todos', },
        { id: '1', name: 'Grado', },
        { id: '2', name: 'Certificación', },
        { id: '3', name: 'Cursos', },
    ];
};

const getStudiesByCategory = (studiesData, category) => {
    if(category && category === '0') return studiesData;
    return studiesData.filter(study => study.data.category == category);
};

export const getSortData = () => {
    return [
        { id: '0', label: 'Sin ordenar', },
        { id: '1', label: 'Nombre de Estudio', },
        { id: '2', label: 'Favoritos', },
    ];
};

const getStudiesSort = (studiesData, sort) => {
    if(!sort || sort === '0') return studiesData;
    
    return studiesData.sort((prevStudy, nextStudy) => {
        switch (sort) {
            case '1':
                const prevTitle = prevStudy.title.toLowerCase();
                const nextTitle = nextStudy.title.toLowerCase();
                if(prevTitle < nextTitle) return -1;
                if(prevTitle > nextTitle) return 1;
                return 0;
            case '2':
                console.log(prevStudy.favs, nextStudy.favs);
                if(prevStudy.favs < nextStudy.favs) return -1;
                if(prevStudy.favs > nextStudy.favs) return 1;
                return 0;
            default:
                return 0;
        }
    });
};

export const getStudiesDataAsync = async (category = '', sort = '') => {
    const snapshot = await getStudiesQuery().get();
    let studies = [];
    snapshot.forEach(doc => studies.push({
        id: doc.id,
        ...doc.data(),
    }));
    if (category) studies = getStudiesByCategory(studies, category);
    if (sort) studies = getStudiesSort(studies, sort);
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