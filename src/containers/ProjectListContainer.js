import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
    Actions
*/
import {
    filterByCategory,
    openDialogSortBy,
    onClickSortItem,
    getProjectList,
    addFav,
} from './../state/actions/projectListAction'

import ContentProjectList from './../components/content/ContentProjectsList'

class ProjectListContainer extends Component {

    categories = [
        {
            uid: '0',
            name: 'Todo'
        },
        {
            uid: '1',
            name: 'Personal'
        },
        {
            uid: '2',
            name: 'Empresarial'
        },
    ];

    itemsForSort = [
        {
            uid: '0',
            label: 'Sin ordenar',
        },
        {
            uid: '1',
            label: 'Nombres de proyecto',
        },
        {
            uid: '2',
            label: 'Favoritos',
        },
    ];

    handleDialogSortOpen = () => {
        this.props.openDialogSortBy(true);
    };

    handleDialogSortClose = () => {
        this.props.openDialogSortBy(false);
    };

    handleCategoryClick = (category) => {
        this.props.filterByCategory(category);
    };

    handleListItemClick = (sortBy) => {
        this.props.onClickSortItem(sortBy);
    };

    getProjectListFilter = (category, sortBy, projects) => {

        if(!projects) return [];

        if((!category || category === '0') && (!sortBy || sortBy === '0')) return projects;

        let projectsFilter = this.getProjectListByCategory(category, projects);

        projectsFilter = this.getProjectListSort(sortBy, projectsFilter);

        return projectsFilter;

    };

    getProjectListByCategory = (category, projects) => {

        if(!category || category === '0') return projects;

        return projects.filter(project => {
            return project.category === category
        })

    };

    getProjectListSort = (sortBy, projects) => {

        if(!sortBy || sortBy === '0') return projects;

        console.log("getProjectListSort: sortBy ", sortBy, projects)

        return projects.sort((prevProject, nextProject) => {
            switch(sortBy) {
                case '1': {

                    const prevProjectName = prevProject.title.toLowerCase();
                    const nextProjectName =  nextProject.title.toLowerCase();

                    if(prevProjectName < nextProjectName) return -1;

                    if(prevProjectName > nextProjectName) return 1;

                    return 0;

                }
                case '2': {

                    if(prevProject.favsCount < nextProject.favsCount) return -1;

                    if(prevProject.favsCount > nextProject.favsCount) return 1;

                    return 0;

                }
                default: return 0;
            }
        });
        
    };

    render() {

        const {
            stateList,
            list,
            category,
            isOpenDialogOrderBy,
            itemToSort,
            addFav,
        } = this.props;

        const projects = list ? list.slice() : [];

        return (
            <ContentProjectList
                onDialogSortOpen={this.handleDialogSortOpen}
                onDialogSortClose={this.handleDialogSortClose}
                onCategoryClick={this.handleCategoryClick}
                onListItemClick={this.handleListItemClick}
                stateList={stateList}
                list={this.getProjectListFilter(category, itemToSort, list.slice())}
                categories={this.categories}
                categorySelected={category}
                itemsForSort={this.itemsForSort}
                itemToSort={itemToSort}
                isOpenDialogOrderBy={isOpenDialogOrderBy}
                addFav={addFav}
            />
        )
    }

    componentDidMount() {

        this.props.getProjectList()

    }

}

const mapStateToProps = (newState, props) => {
    
    var { projectList } = newState;
    
    if(!projectList) {
        projectList = {
            state: 0,
            list: [],
            category: '0',
            isOpenDialogOrderBy: false,
            itemToSort: '0',
        };
    }
    
    const { state, list, category, isOpenDialogOrderBy, itemToSort } = projectList;
    
    return {
        stateList: state,
        list: list ? list : [],
        category,
        isOpenDialogOrderBy: isOpenDialogOrderBy ? isOpenDialogOrderBy : false,
        itemToSort,
    };

};

const mapDispatchToProps = dispatch => ({

    filterByCategory:   (category)                          => dispatch(filterByCategory(category)),
    openDialogSortBy:   (isOpen)                            => dispatch(openDialogSortBy(isOpen)),
    onClickSortItem:    (itemToSort)                        => dispatch(onClickSortItem(itemToSort)),
    getProjectList:     (category = '', unsuscribe = false) => dispatch(getProjectList(category, unsuscribe)),
    addFav:             (studyId, IP, value)                => dispatch(addFav(studyId, IP, value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer)