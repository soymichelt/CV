/*
    Información Académica
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MyCardMedia from './../theme/MyMediaCard'
import ContentAcademicListFilter from './ContentAcademicListFilter'

const styles = {
    containerList: {
        padding: 24,
    },
};

export class ContentAcademicList extends Component {

    state = {
        categories: [
            {
                uid: '0',
                name: 'Todos'
            },
            {
                uid: '1',
                name: 'Grado'
            },
            {
                uid: '2',
                name: 'Certificados'
            },
            {
                uid: '3',
                name: 'Cursos'
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
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017. Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '2',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '3',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                uid: '4',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
        ]
    };

    handleSortClick = () => {
        console.log("click sort");
    };

    render() {

        const { classes } = this.props;

        const { categories, list } = this.state;

        return (

            <div
                className={'contentAcademicListSection'}
            >

                <ContentAcademicListFilter
                    categories={categories}
                    active={'0'}
                    handleSortClick={this.handleSortClick}
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

    };

}

export default withStyles(styles)(ContentAcademicList);