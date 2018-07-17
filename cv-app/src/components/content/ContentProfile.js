/*
    Foto de Portada
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Profile from './Profile'

const styles = theme => ({
    coverPortroit: {
        width: '100%',
        maxHeight: 416,
        objectFit: 'cover',
        position: 'relative',
        background: 'linear-gradient(to right, rgb(239, 108, 0), rgb(251, 140, 0))',
    },
})

export class ContentProfile extends Component {

    static propTypes = {

        classes: PropTypes.object.isRequired,

    }

    render() {

        const { classes } = this.props;

        return (
            <section
                className={classes.coverPortroit}
            >
                <Profile />
            </section>
        );

    }
    
}

export default withStyles(styles)(ContentProfile);