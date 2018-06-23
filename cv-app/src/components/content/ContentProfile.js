/*
    Foto de Portada
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Profile from './Profile'

const styles = theme => ({
    coverPhoto: {
        width: '100%',
        maxHeight: 416,
        objectFit: 'cover',
        marginBottom: -4,
        position: 'relative'
    },
})

export class ContentProfile extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    render() {

        const { classes } = this.props;

        return (
            <section>
                <img
                    className={classes.coverPhoto}
                    src={process.env.PUBLIC_URL + '/res/main_background.jpg'}
                />
                <Profile />
            </section>
        )
    }
}

export default withStyles(styles)(ContentProfile);