/*
    Información Académica
*/

import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MyCardMedia from './../theme/MyMediaCard'
import ContentCategoryFilter from './ContentCategoryFilter'
import SimpleDialog from './../theme/SimpleDialog'
import ContentLoading from './ContentLoading'
import NotFound from './../theme/NotFound'
import Pagination from './../theme/pagination'

import Avatar from '@material-ui/core/Avatar'

const styles = {
    containerList: {
        paddingTop: 24,
        paddingBottom: 24,
        minHeight: '425px',
    },
};

const ContentAcademicList = (props) => {

    const {
        classes,
        stateList,
        list,
        categories,
        categorySelected,
        isOpenDialogOrderBy,
        itemsForSort,
        onDialogSortOpen,
        onDialogSortClose,
        onCategoryClick,
        onListItemClick,
        addFav,
        postOpen,
    } = props;

    return (

        <Fragment
        >

            <ContentCategoryFilter
                categories={ categories }
                active={ categorySelected ? categorySelected : '0' }
                handleSortClick={ onDialogSortOpen }
                handleCategoryClick={ onCategoryClick }
            />

            <SimpleDialog
                title={ 'Ordenar por...' }
                list={ itemsForSort }
                open={ isOpenDialogOrderBy }
                onClose={ onDialogSortClose }
                onListItemClick={ onListItemClick }
            />

            <Grid
                className={ classes.containerList }
                container
                spacing={ 8 }
                justify={ 'center' }
            >
                {renderAcademicList(list, stateList, addFav, postOpen)}
            </Grid>

        </Fragment>

    );

};

const renderAcademicList = (list, stateList, addFav, postOpen) => {

    var renderList;
    switch (stateList) {
        case 0:
            renderList = (
                <ContentLoading />
            );
            break;
        case 1:
            renderList = (
                list && list.length > 0 ?
                    <Fragment>
                        {
                            list.map((item) => {

                                return (
                                    <Grid
                                        key={item.uid}
                                        item
                                    >
                                        <MyCardMedia
                                            key={item.uid}
                                            avatar={
                                                <Avatar
                                                    src={item.avatarURL}
                                                />
                                            }
                                            photoURL={item.photoURL}
                                            photoDescription={item.photoURL}
                                            cardTitle={item.title}
                                            cardSubtitle={item.data.school}
                                            cardFavs={item.favsCount}
                                            onClickFav={
                                                (e) => {
                                                    e.stopPropagation()
                                                    addFav(item.uid, true, '10.1.184.47')
                                                }
                                            }
                                            cardShares={item.sharesCount}
                                            onClickCard={() => postOpen(item.uid)}
                                        />
                                    </Grid>

                                )

                            })
                        }
                        {
                            list && list.length > 0 ? (
                                <Grid
                                    key={'content-academic-list-pagination'}
                                    item
                                    xs={12}
                                >
                                    <Grid
                                        container
                                        justify={'center'}
                                    >
                                        <Grid
                                            item
                                        >
                                            <Pagination
                                                totalRecords={list.length}
                                                pageLimit={12}
                                                pageNeighbours={1}
                                                onPageChanged={(data) => { }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                            : {}
                        }
                    </Fragment>
                :
                    <NotFound
                        title={'Por ahora no hay datos :('}
                        description={'Al parecer aún no se ha ingresado la información académica. Pero pronto la añadiremos.'}
                    />
            );
            break;
        case 2:
            renderList = (
                <NotFound
                    title={'Ha ocurrido un error :('}
                    description={'Lo sentimos actualmente estamos teniendo problemas al obtener los datos. Estamos trabajando en ello.'}
                />
            );
            break;
        default:
            break;
    }
    return (renderList);

};

const ContentAcademicListWithStyles = withStyles(styles)(ContentAcademicList);

export default ContentAcademicListWithStyles;