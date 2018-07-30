/*
    Perfil
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
    content: {
        position: 'relative',
        textAlign: 'center',
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        zIndex: 800,
    },
    profile: {
        width: 128,
        height: 128,
        margin: '0 auto',
    },
    fontProfile: {
        fontFamily: 'Lato',
        fontWeight: 300,
    },
    primaryText: {
        margin: 0,
        fontWeight: 500,
        fontSize: 24,
    },
    secondaryText: {
        margin: 0,
        fontSize: 20,
    },
    otherText: {
        margin: 0,
        fontSize: 18,
    },
    social: {
        margin: '0 auto',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
        width: 112,
    },
});

const Profile = ({ classes, backgroundUrl1, backgroundUrl2 }) => (

    <section
        className={classes.content}
    >
        <img
            className={classes.profile}
            src={process.env.PUBLIC_URL + '/res/circleProfile.png'}
            alt={'Michel Roberto Traña Tablada'}
        />
        <h1
            className={classNames(classes.primaryText, classes.fontProfile)}
        >
            Michel R. Traña Tablada
        </h1>
        <h2
            className={classNames(classes.secondaryText, classes.fontProfile)}
        >
            Ingeniero en Sistemas de Información
        </h2>
        <h3
            className={classNames(classes.otherText, classes.fontProfile)}
        >
            (+505) 8367 - 1719
        </h3>
        <section className={classes.social}>
            <a
                href='https://www.facebook.com/mtraatabladaa94'
                target='_blank'
                rel="noopener"
            >
                <img
                    src={process.env.PUBLIC_URL + '/res/fb.png'}
                    alt={'Facebook: mtraatabladaa94'}
                />
            </a>
            <a
                href='https://twitter.com/mtraatabladaa94'
                target='_blank'
                rel="noopener"
            >
                <img
                    src={process.env.PUBLIC_URL + '/res/tw.png'}
                    alt={'Twitter: mtraatabladaa94'}
                />
            </a>
            <a
                href='https://github.com/mtraatabladaa94'
                target='_blank'
                rel="noopener"
            >
                <img
                    src={process.env.PUBLIC_URL + '/res/gb.png'}
                    alt={'GitHub: mtraatabladaa94'}
                />
            </a>
        </section>
    </section>

);

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);