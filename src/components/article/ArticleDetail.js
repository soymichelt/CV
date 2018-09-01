import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import PublishCard from './../theme/PublishCard'

const style = {
    root: {
        padding: '16px 8px',
        marginTop: '-250px',
        position: 'relative',
        zIndex: 1200,
    },
    container: {
        maxWidth: '100%',
    },
};

let ArticleDetail = ({ classes }) => {

    return (
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
                    elevation={4}
                >
                    <PublishCard
                        withoutDivider
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
                    >
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

ArticleDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(ArticleDetail);