/*
    Información Académica
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import MyCardMedia from './../theme/MyMediaCard'

const styles = {
    
};

export class ContentAcademicList extends Component {

    render() {

        const list = [
            {
                'key': '0',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                'key': '0',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                'key': '0',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                'key': '0',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
            {
                'key': '0',
                'photoURL': process.env.PUBLIC_URL + '/res/banner2.jpg',
                'photoDescription': 'Certificado de Programador',
                'cardTitle': 'Microsoft MTA C#',
                'cardDescription': 'Certificado como programador MTA por Microsoft 2017',
            },
        ];

        return (

            <Grid container xs={12} spacing={16} justify={'center'}>
                {
                    list.map((item) => {

                        return (
                            <Grid item>
                                <MyCardMedia
                                    key={item.key}
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

        );

    };

}

export default withStyles(styles)(ContentAcademicList);