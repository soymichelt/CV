import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/firestore'

/*
    Actions
*/
import {
    filterByCategory,
    openDialogSortBy,
    onClickSortItem,
    getAcademicList,
    addFav,
} from './../state/actions/academicListAction'

import ContentAcademicList from './../components/content/ContentAcademicList'

class AcademicListContainer extends Component {

    categories = [
        {
            uid: '0',
            name: 'Todo'
        },
        {
            uid: '1',
            name: 'Grado'
        },
        {
            uid: '2',
            name: 'Certificado'
        },
        {
            uid: '3',
            name: 'Curso'
        },
    ];

    itemsForSort = [
        {
            uid: '0',
            label: 'Sin ordenar',
        },
        {
            uid: '1',
            label: 'Nombre de Estudio',
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

    handleListItemClick = (orderBy) => {
        this.props.onClickSortItem(orderBy);
    };

    render() {

        const {
            stateList,
            list,
            category,
            isOpenDialogOrderBy,
            itemToSort
        } = this.props;

        console.log(category)

        return (
            <ContentAcademicList
                onDialogSortOpen={this.handleDialogSortOpen}
                onDialogSortClose={this.handleDialogSortClose}
                onCategoryClick={this.handleCategoryClick}
                onListItemClick={this.handleListItemClick}
                stateList={stateList}
                list={list}
                categories={this.categories}
                categorySelected={category}
                itemsForSort={this.itemsForSort}
                itemToSort={itemToSort}
                isOpenDialogOrderBy={isOpenDialogOrderBy}
            />
        )

    }

    createFav = (key, value, ipClient) => {
        
        var db = firebase.firestore();

        db.collection('studies').doc(key).collection('favs').add({
            date: new Date(),
            ipClient: ipClient,
            fav: value,
        })
        .then((docRef) => {
            console.log(docRef);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });

    };

    componentDidMount() {

        this.props.getAcademicList()

    }

    componentWillUpdate() {

        const { category } = this.props;

        if(category) {
            this.props.getAcademicList()
        }

    }

}

const mapStateToProps = (newState, props) => {
    
    var { academicList } = newState;
    
    if(!academicList) {
        academicList = {
            state: 0,
            list: [],
            category: '0',
            isOpenDialogOrderBy: false,
            itemToSort: '0',
        };
    }
    
    const { state, list, category, isOpenDialogOrderBy, itemToSort } = academicList;
    
    return {
        stateList: state,
        list,
        category,
        isOpenDialogOrderBy: isOpenDialogOrderBy ? isOpenDialogOrderBy : false,
        itemToSort,
    };

};

const mapDispatchToProps = dispatch => ({

    filterByCategory:       (category)              =>      dispatch(filterByCategory(category)),
    openDialogSortBy:       (isOpen)                =>      dispatch(openDialogSortBy(isOpen)),
    onClickSortItem:        (itemToSort)            =>      dispatch(onClickSortItem(itemToSort)),
    getAcademicList:        ()                      =>      dispatch(getAcademicList()),
    addFav:                 (studyId, IP, value)    =>      dispatch(addFav(studyId, IP, value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AcademicListContainer);