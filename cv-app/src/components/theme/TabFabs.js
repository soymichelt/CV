/*
    Tabs Fabs
*/
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
    fab: {
        position: 'fixed',
        zIndex: 1002,
        bottom: theme.spacing.unit * 7,
        right: theme.spacing.unit * 3,
    },
});

const TabFabs = ({classes, theme, selected, list}) => {

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = list.map((fab) => {

        return (

            <Zoom
                key={fab.key}
                in={selected === fab.key}
                timeout={transitionDuration}
                style={{
                    transitionDelay: selected === fab.key ? transitionDuration.exit : 0,
                }}
                unmountOnExit
            >

                <Button
                    variant='fab'
                    className={classes.fab}
                    color='primary'
                >
                    {fab.icon}
                </Button>

            </Zoom>

        );

    });

    return fabs;

};

TabFabs.propTypes = {
    classes: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    selected: PropTypes.number.isRequired,
    fabClasses: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TabFabs);