/* Imports Node & ReactJS Elements */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames'

import { drawerWidth } from './MyDrawer';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        minHeight: 72,
    },
    appBarButton: {
        color: 'rgba(255,255,255,0.7)',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        paddingRight: '0px!important',
        marginRight: '17px!important',
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
        maxHeight: 40,
    },
});

export const MyAppBar = ({ classes, open, onDrawerOpen, background }) => (
    <AppBar
        id={'myAppBar'}
        className={classNames(classes.appBar, open && classes.appBarShift)}
        elevation={0}
        style={background ?
            {
                background: background,
            }
            :
            {
                background: 'linear-gradient(to right, rgb(239, 108, 0), rgb(251, 140, 0))',
            }
        }
    >
        <Toolbar
            disableGutters={!open}
            className={classes.toolbar}
        >
            <IconButton
                aria-label='open drawer'
                onClick={onDrawerOpen}
                className={
                    classNames(
                        classes.appBarButton,
                        classes.menuButton,
                        open && classes.hide,
                    )
                }
            >
                <MenuIcon />
            </IconButton>
            
            <Typography
                variant="title" 
                color="inherit"
                noWrap
                className={classes.flex}
            >
                <Link
                    to={'/'}
                >
                    <img
                        src={process.env.PUBLIC_URL + '/res/imagoTipo.png'}
                        className={classes.imagoTipo}
                        alt={'mtraatabladaa94'}
                    />
                </Link>
            </Typography>

            <div className={classes.menuButtonRightSection}>
                <Hidden
                    only={'xs'}
                >
                    <Button
                        className={classes.appBarButton}
                        component={'a'}
                        href={process.env.PUBLIC_URL + '/res/curriculum.pdf'}
                        target={'_blank'}
                    >
                        Curriculum
                    </Button>
                    <Button
                        className={classes.appBarButton}
                        component={ Link }
                        to={'/Account/Signin'}
                    >
                        Iniciar Sesión
                    </Button>
                </Hidden>
            </div>
        </Toolbar>
    </AppBar>
);

MyAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onDrawerOpen: PropTypes.func.isRequired,
    background: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(MyAppBar);