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
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import { fade } from '@material-ui/core/styles/colorManipulator'
import classNames from 'classnames'

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        minHeight: 72,
    },
    appBarButton: {
        color: 'rgba(255,255,255,0.7)',
    },
    appBarShift: {
        paddingRight: '0px!important',
    },
    flex: {
        flex: 1,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 12,
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
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 140,
          '&:focus': {
            width: 200,
          },
        },
      },
});

export const MyAppBar = ({ classes, open, onDrawerOpen, background, elevation }) => (
    <AppBar
        id={'myAppBar'}
        className={classNames(classes.appBar, open && classes.appBarShift)}
        elevation={elevation}
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

            

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <Input
                    placeholder="¿Qué buscas?"
                    disableUnderline
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>

            

            <div className={classes.menuButtonRightSection}>
                <Hidden
                    only={'xs'}
                >
                    <Button
                        className={classes.appBarButton}
                        component={ Link }
                        to={'/Timeline'}
                    >
                        Timeline
                    </Button>
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
    elevation: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyAppBar);