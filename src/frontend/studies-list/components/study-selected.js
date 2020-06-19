import React from 'react';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Clear';
import { DialogFullScreen } from './../../theme/components/dialog-full-screen';
import {Loading} from './../../theme/components/loading';
import {NotFound} from './../../theme/components/not-found';
import {CardPost } from './../../theme/components/card-post';
import {studySelectedStyles} from './study-selected.styles';

export const StudySelected = ({ dataStudy, dataState, open, onClose }) => {
    const classes = studySelectedStyles();
    return (
        <DialogFullScreen
            title={
                dataState === 0 ? 'Cargando...' : dataState === 1 ? dataStudy.title : 'Ha ocurrido un error...'
            }
            onClose={onClose}
            open={open}
        >
            <Grid container justify={'center'}>
                <Grid item xs={10} sm={8} md={6}>
                    {dataState === 0 ?
                            (
                                <Paper className={classnames(classes.container, classes.containerCenter)}>
                                    <Loading />
                                </Paper>
                            )
                        : dataState === 1 ?
                            (
                                <section className={classes.container}>
                                    <CardPost
                                        avatar={
                                            <Avatar src={dataStudy.avatar} />
                                        }
                                        actionHeader={
                                            <IconButton onClick={onClose}>
                                                <CloseIcon />
                                            </IconButton>
                                        }
                                        title={dataStudy.title}
                                        subtitle={dataStudy.data.school}
                                        image={dataStudy.photo}
                                    />
                                </section>
                            )
                        :
                            (
                                <Paper className={classnames(classes.container, classes.containerCenter)}>
                                    <NotFound
                                        title={'Ha ocurrido un error inesperado :('}
                                        description={'Lo sentimos actualmente estamos teniendo problemas al obtener los datos. Estamos trabajando en ello.'}
                                    />
                                </Paper>
                            )
                    }
                </Grid>
            </Grid>
        </DialogFullScreen>
    );
};