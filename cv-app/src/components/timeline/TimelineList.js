import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import MyCardMedia from './../theme/PublishCard'

const styles = {

    root: {
        padding: '16px 8px',
    },
    container: {
        maxWidth: '100%',
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
                xs={10}
                sm={6}
            >

                <Paper
                    className={classes.container}
                    elevation={1}
                >
                    <MyCardMedia
                        avatar={
                            <Avatar
                                src={process.env.PUBLIC_URL + '/res/circleProfile64x64.png'}
                            />
                        }
                        photoURL={process.env.PUBLIC_URL + '/res/banner2.jpg'}
                        photoDescription={'Platzi'}
                        cardTitle={'Michel Roberto Traña Tablada'}
                        cardSubtitle={'hace 1 minuto'}
                        cardFavs={35}
                        cardShares={150}
                        cardDescription={
                            <p>
                                La programación orientada a objetos muy conocida por todos, o por casi todos,
                                es un paradigma que trata el desarrollo de software como entidades de la vida real. 
                                Pero este presenta algunos problemas como por ejemplo a la hora de escribir un programa
                                donde hay código que se repite en responsabilidades que no están relacionadas. Es aquí
                                donde nace la Programación Orientada a Aspectos que busca separar las obligaciones
                                transversales (mejor conocidas como aspectos) de la parte principal...
                            </p>
                        }
                    />
                    <MyCardMedia
                        avatar={
                            <Avatar
                                src={process.env.PUBLIC_URL + '/res/images-data/microsoft.png'}
                            />
                        }
                        photoURL={process.env.PUBLIC_URL + '/res/main_background.jpg'}
                        photoDescription={'Platzi'}
                        cardTitle={'Programación orientada objetos vs Programación orientada a Aspectos'}
                        cardSubtitle={'hace 1 minuto'}
                        cardFavs={35}
                        cardShares={150}
                    />
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