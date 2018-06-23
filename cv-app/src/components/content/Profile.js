/*
    Perfil
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        textAlign: 'center',
        position: 'relative',
        height: 420,
        marginTop: -420,
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    profile: {
        width: 128,
        height: 128,
        margin: '0 auto',
    },
    primaryText: {
        margin: 0,
    },
    secondaryText: {
        margin: 0,
        fontSize: 16,
    },
    otherText: {
        margin: 0,
        fontSize: 14,
    },
});

const Profile = ({classes}) => (
    <section className={classes.root}>
        <img
            className={classes.profile}
            src={process.env.PUBLIC_URL + '/res/circleProfile.png'}
        />
        <h1 className={classes.primaryText}>
            Michel R. Traña Tablada
        </h1>
        <h2 className={classes.secondaryText}>
            Ingeniero en Sistemas de Información
        </h2>
        <h3 className={classes.otherText}>
            (+505) 8367 - 1719
        </h3>
    </section>
);

export default withStyles(styles)(Profile);