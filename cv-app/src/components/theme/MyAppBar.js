/* Imports Node & ReactJS Elements */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames'

import { drawerWidth } from './MyDrawer';

const styles = theme => ({
    appBar: {
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        minHeight: 72,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    flex: {
        flex: 1,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonRightSection: {
        marginRight: 12,
    },
    toolbar: {
        minHeight: 72,
    },
    imagoTipo: {
        maxHeight: 38,
    },
});

export const MyAppBar = ({ classes, open, onDrawerOpen }) => (
    <div className={classes.root}>
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar
                disableGutters={!open}
                className={classes.toolbar}
            >
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    onClick={onDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                    color='secondary'
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="title" 
                    color="inherit"
                    noWrap
                    className={classes.flex}
                >
                    <img
                        src={process.env.PUBLIC_URL + '/res/imagoTipo.png'}
                        className={classes.imagoTipo}
                    />
                </Typography>
                <div className={classes.menuButtonRightSection}>
                    <Button
                        color='secondary'
                    >
                        Curriculum
                    </Button>
                    <Button
                        color='secondary'
                    >
                        Iniciar Sesión
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    </div>
);

MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onDrawerOpen: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyAppBar);