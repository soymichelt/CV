import { getPublicationsQuery } from './publications.data';

const PROJECTS_KEY = 'projects';

const getProjectsQuery = () => {
    return getPublicationsQuery().where('postType', '==', PROJECTS_KEY);
};

export const getCategoriesData = () => {
    return [
        { id: '0', name: 'Todos', },
        { id: '1', name: 'Personal', },
        { id: '2', name: 'Empresarial', },
    ];
};

const getProjectsByCategory = (projectsData, category) => {
    if(category && category === '0') return projectsData;
    return projectsData.filter(project => project.data.category == category);
};

export const getSortData = () => {
    return [
        { id: '0', label: 'Sin ordenar', },
        { id: '1', label: 'Nombres de proyecto', },
        { id: '2', label: 'Favoritos', },
    ];
};

const getProjectsSort = (projectsData, sort) => {
    if(!sort || sort === '0') return projectsData;
    
    return projectsData.sort((prevProject, nextProject) => {
        switch (sort) {
            case '1':
                const prevTitle = prevProject.title.toLowerCase();
                const nextTitle = nextProject.title.toLowerCase();
                if(prevTitle < nextTitle) return -1;
                if(prevTitle > nextTitle) return 1;
                return 0;
            case '2':
                console.log(prevProject.favs, nextProject.favs);
                if(prevProject.favs < nextProject.favs) return -1;
                if(prevProject.favs > nextProject.favs) return 1;
                return 0;
            default:
                return 0;
        }
    });
};

export const getProjectsDataAsync = async (category = '', sort = '') => {
    const snapshot = await getProjectsQuery().get();
    let projects = [];
    snapshot.forEach(doc => projects.push({
        id: doc.id,
        ...doc.data(),
    }));
    if (category) projects = getProjectsByCategory(projects, category);
    if (sort) projects = getProjectsSort(projects, sort);
    return projects;
};

export const selectProjectDataAsync = async (projectId) => {
    const snapshot = await getProjectsQuery().doc(projectId).get();
    if(snapshot.exists) {
        return {
            ...snapshot.data()
        };
    }
    else {
        throw new Error('No encontrado');
    }
};