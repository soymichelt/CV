import React from 'react'
import classnames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

import FullScreenDialog from './../theme/full-screen-dialog'
import ContentLoading from './../content/ContentLoading'
import NotFound from './../theme/NotFound'
import PostCard from './../theme/post-card'

const styles = theme => ({
    container: {
        maxWidth: '100%',
        minHeight: '215px',
        marginTop: theme.spacing.unit * 3,
    },
    containerCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const PostStudy = ({
    data,
    state,
    open,
    onClose,
    classes,
}) => {

    if(!state) state = 0;

    return (
        <FullScreenDialog
            title={
                state === 0 ? 'Cargando...' : state === 1 ? data.title : 'Ha ocurrido un error...'
            }
            onClose={ onClose }
            open={ open }
        >
            <Grid
                container
                justify={'center'}
            >
                <Grid
                    item
                    xs={10}
                    sm={8}
                    md={6}
                >
                    {
                        state === 0 ?
                            (
                                <Paper
                                    className={classnames(classes.container, classes.containerCenter)}
                                >
                                    <ContentLoading />
                                </Paper>
                            )
                        : state === 1 ?
                            (
                                <section className={classes.container}>
                                    <PostCard
                                        avatar={
                                            <Avatar
                                                src={data.avatarURL}
                                            />
                                        }
                                        title={data.title}
                                        subtitle={data.data.school}
                                        image={data.photoURL}
                                    />
                                </section>
                            )
                        :
                            (
                                <Paper
                                    className={classnames(classes.container, classes.containerCenter)}
                                >
                                    <NotFound
                                        title={'Ha ocurrido un error inesperado :('}
                                        description={'Lo sentimos actualmente estamos teniendo problemas al obtener los datos. Estamos trabajando en ello.'}
                                    />
                                </Paper>
                            )
                    }
                </Grid>
            </Grid>
        </FullScreenDialog>
    );

};

export default withStyles(styles)(PostStudy);