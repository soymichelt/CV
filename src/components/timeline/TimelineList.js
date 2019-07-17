import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import ContentLoading from './../content/ContentLoading'
import NotFound from './../theme/NotFound'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'
import lightBlue from '@material-ui/core/colors/lightBlue'
import TagIcon from '@material-ui/icons/LocalOffer'
import DateIcon from '@material-ui/icons/Event'
import TimelineIcon from '@material-ui/icons/Timeline'

import PublishCard from './../theme/PublishCard'

const styles = {

    root: {
        padding: '32px 8px 40px 8px',
    },
    container: {
        maxWidth: '100%',
        minHeight: '215px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    groupCaption:{
        marginBottom: '8px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,.54)',
        textTransform: 'uppercase',
    },
    title: {
        color: blueGrey[800],
        fontFamily: '"Source Sans Pro", sans-serif',
        fontWieght: 300,
        fontSize: '28px',
        lineHeight: '38px',
    },
    caption: {
        fontSize: '18px',
        lineHeight: '28px',
        color: grey[900],
    },
    readMore: {
        color: lightBlue[600],
        textDecoration: 'none',
    },

};

const renderTimelineList = (list, stateList, classes) => {
    let renderList;
    switch(stateList) {
        case 0:
            renderList = (
                <ContentLoading />
            );
            break;
        case 1:
            renderList = (
                list && list.length > 0 ?
                    list.map((item) => {
                        return (
                            <PublishCard
                                avatar={
                                    <Avatar
                                        src={process.env.PUBLIC_URL + '/res/circleProfile64x64.png'}
                                    />
                                }
                                photoURL={process.env.PUBLIC_URL + '/res/banner2.jpg'}
                                photoDescription={'Platzi'}
                                cardTitle={'Michel Roberto Traña Tablada'}
                                cardSubtitle={
                                    <span>
                                        <DateIcon style={{fontSize: '16px', verticalAlign: 'middle'}} /> hace 1 minuto • <TagIcon style={{fontSize: '16px', verticalAlign: 'middle'}} /> blog
                                    </span>
                                }
                                cardFavs={35}
                                cardShares={150}
                            >
                                <h1
                                    className={classes.title}
                                >
                                    Introducción a la Programación Orientada a Aspectos. Patrones y Anti-patrones.
                                </h1>
                                <p
                                    className={classes.caption}
                                >
                                    La programación orientada a objetos muy conocida por todos, o por casi todos,
                                    es un paradigma que trata el desarrollo de software como entidades de la vida real. 
                                    Pero este presenta algunos problemas como por ejemplo a la hora de escribir un programa
                                    donde hay código que se repite en responsabilidades que no están relacionadas. Es aquí
                                    donde nace la Programación Orientada a Aspectos que busca separar las obligaciones
                                    transversales (mejor conocidas como aspectos) de la parte principal...
                                </p>
                                <Link
                                    to={'/Timeline/Article'}
                                    className={
                                        classnames(
                                            classes.caption,
                                            classes.readMore,
                                        )
                                    }
                                >
                                    Leer más
                                </Link>
                            </PublishCard>
                        )
                    })
                :
                    <NotFound
                        title={'Por ahora no hay datos :('}
                        description={'Al parecer aún no se han realizado publicaciones de blog. Pero pronto la añadiremos.'}
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

    return renderList;

};

let TimelineList = ({ classes, data, state }) => {

    return(
        <Grid
            className={classes.root}
            container
            justify={'center'}
        >

            <Grid
                item
                xs={11}
                sm={9}
                lg={7}
            >

                <Typography
                    className={
                        classnames(
                            classes.groupCaption
                        )
                    }
                    autoCapitalize={'true'}
                >
                    <TimelineIcon style={{fontSize: '16px', verticalAlign: 'middle'}} /> Timeline
                </Typography>

                <Paper
                    className={classes.container}
                >
                    {renderTimelineList(data, state, classes)}
                </Paper>

            </Grid>

        </Grid>
    );

};

TimelineList.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    state: PropTypes.number.isRequired,
};

export default withStyles(styles)(TimelineList);