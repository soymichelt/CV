/*
    Portafolio Personal
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import firebase from 'firebase'

import MyCardMedia from './../theme/MyMediaCard'
import ContentCategoryFilter from './ContentCategoryFilter'
import SimpleDialog from './../theme/SimpleDialog'

require('firebase/firestore')

const styles = {
    containerList: {
        padding: 24,
        minHeight: 400,
    },
};

export class ContentProjectsList extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    state = {
        isOpenDialogOrderBy: false,
        categories: [
            {
                uid: '0',
                name: 'Todos'
            },
            {
                uid: '1',
                name: 'Empresarial'
            },
            {
                uid: '2',
                name: 'Personal'
            },
            {
                uid: '3',
                name: 'Otros'
            },
        ],
        list: [
            {
                uid: '0',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '1',
                photoURL: process.env.PUBLIC_URL + '/res/banner2.jpg',
                photoDescription: 'Certificado de Programador',
                cardTitle: 'Microsoft MTA C#',
                cardDescription: 'Certificado como programador MTA por Microsoft 2017. Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '2',
                photoURL: process.env.PUBLIC_URL + '/res/banner2.jpg',
                photoDescription: 'Certificado de Programador',
                cardTitle: 'Microsoft MTA C#',
                cardDescription: 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '3',
                photoURL: process.env.PUBLIC_URL + '/res/banner2.jpg',
                photoDescription: 'Certificado de Programador',
                cardTitle: 'Microsoft MTA C#',
                cardDescription: 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '4',
                photoURL: process.env.PUBLIC_URL + '/res/banner2.jpg',
                photoDescription: 'Certificado de Programador',
                cardTitle: 'Microsoft MTA C#',
                cardDescription: 'Certificado como programador MTA por Microsoft 2017',
            },
        ]
    };

    handleDialogSortOpen = () => {
        this.setState({
            isOpenDialogOrderBy: true,
        });
    };

    handleDialogSortClose = () => {
        this.setState({
            isOpenDialogOrderBy: false,
        });
    };

    handleCategoryClick = (category) => {
        this.setState({
            category: category,
        });
    };

    handleListItemClick = (orderBy) => {
        console.log('Ordenar por: ' + orderBy);
        this.setState({
            orderBy: orderBy,
        });
    };

    render() {

        const { classes } = this.props;

        const { categories, list, category, isOpenDialogOrderBy } = this.state;

        return (

            <div
                className={'contentAcademicListSection'}
            >

                <ContentCategoryFilter
                    categories={categories}
                    active={category ? category : '0'}
                    handleSortClick={this.handleDialogSortOpen}
                    handleCategoryClick={this.handleCategoryClick}
                />

                <SimpleDialog
                    title={'Ordenar por...'}
                    list={[
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
                    ]}
                    open={isOpenDialogOrderBy}
                    onClose={this.handleDialogSortClose}
                    onListItemClick={this.handleListItemClick}
                />

                <Grid className={classes.containerList} container spacing={16} justify={'center'}>
                    {
                        list.map((item) => {

                            return (
                                <Grid
                                    key={item.uid}
                                    item
                                >
                                    <MyCardMedia
                                        key={item.uid}
                                        photoURL={item.photoURL}
                                        photoDescription={item.photoURL}
                                        cardTitle={item.cardTitle}
                                        cardDescription={item.cardDescription}
                                    /> 
                                </Grid>

                            )

                        })
                    }
                </Grid>

            </div>

        );

    }

}

export default withStyles(styles)(ContentProjectsList);