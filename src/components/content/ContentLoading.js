/*
    Loading Component
*/
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import lightBlue from '@material-ui/core/colors/lightBlue'
import blueGrey from '@material-ui/core/colors/blueGrey'

const styles = {
    container: {
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress: {
        color: lightBlue[600],
    },
    label: {
        fontSize: '18px',
        color: blueGrey[900],
    },
};

const ContentLoading = ({classes}) => {
    return(
        <section className={classes.container}>
            <CircularProgress
                className={classes.progress}
                size={48}
                thickness={5}
            />
            <h1
                className={classes.label}
            >
                Un momento...
            </h1>
        </section>
    );
};

ContentLoading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentLoading);