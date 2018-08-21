import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import blueGrey from '@material-ui/core/colors/blueGrey'

import TagIcon from '@material-ui/icons/LocalOffer'
import DateIcon from '@material-ui/icons/Event'

import PublishCard from './../theme/PublishCard'

const styles = {

    root: {
        padding: '16px 8px',
    },
    container: {
        maxWidth: '100%',
    },
    title: {
        color: blueGrey[800],
        fontWieght: 600,
    },

};

let TimelineList = ({ classes, data }) => {

    return(
        <Grid
            className={classes.root}
            container
            justify={'center'}
        >

            <Grid
                item
                xs={11}
                sm={8}
                lg={6}
            >

                <Paper
                    className={classes.container}
                    elevation={1}
                >
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
                        <p>
                            La programación orientada a objetos muy conocida por todos, o por casi todos,
                            es un paradigma que trata el desarrollo de software como entidades de la vida real. 
                            Pero este presenta algunos problemas como por ejemplo a la hora de escribir un programa
                            donde hay código que se repite en responsabilidades que no están relacionadas. Es aquí
                            donde nace la Programación Orientada a Aspectos que busca separar las obligaciones
                            transversales (mejor conocidas como aspectos) de la parte principal...
                        </p>
                    </PublishCard>
                    <PublishCard
                        avatar={
                            <Avatar
                                src={process.env.PUBLIC_URL + '/res/circleProfile64x64.png'}
                            />
                        }
                        photoURL={process.env.PUBLIC_URL + '/res/main_background.jpg'}
                        photoDescription={'Platzi'}
                        cardTitle={'Michel Roberto Traña Tablada'}
                        cardSubtitle={
                            <span>
                                <DateIcon style={{fontSize: '16px', verticalAlign: 'middle'}} /> hace 1 minuto • <TagIcon style={{fontSize: '16px', verticalAlign: 'middle'}} /> evento
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
                        <p>
                            La programación orientada a objetos muy conocida por todos, o por casi todos,
                            es un paradigma que trata el desarrollo de software como entidades de la vida real. 
                            Pero este presenta algunos problemas como por ejemplo a la hora de escribir un programa
                            donde hay código que se repite en responsabilidades que no están relacionadas. Es aquí
                            donde nace la Programación Orientada a Aspectos que busca separar las obligaciones
                            transversales (mejor conocidas como aspectos) de la parte principal...
                        </p>
                    </PublishCard>
                </Paper>

            </Grid>

        </Grid>
    );

};

TimelineList.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};

export default withStyles(styles)(TimelineList);