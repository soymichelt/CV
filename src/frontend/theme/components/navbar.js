import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import classNames from 'classnames';

import { navBarStyles } from './navbar.styles';

import Logo from './../../../assets/res/logo.png';

export const NavBar = ({
    drawerOpen,
    onDrawerOpen,
    background,
    elevation
}) => {

    const classes = navBarStyles();

    return (
        <>
            <AppBar
                id={'myAppBar'}
                className={ classNames(classes.appBar, drawerOpen && classes.appBarShift) }
                elevation={ elevation ? elevation : 2 }
                style={ background ? { background: background, }
                    :
                    { background: 'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))', }
                }
            >
                <Toolbar
                    disableGutters={!drawerOpen}
                    className={classes.toolbar}
                >
                    <IconButton
                        aria-label='open drawer'
                        onClick={onDrawerOpen}
                        className={
                            classNames(
                                classes.appBarButton,
                                classes.menuButton,
                                drawerOpen && classes.hide,
                            )
                        }
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Link to={'/'} className={classes.flex}>
                        <img
                            src={Logo}
                            className={classes.imagoTipo}
                            alt={'soymichel'}
                        />
                    </Link>

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
                        <Hidden only={['xs', 'sm']}>
                            <Button
                                className={classes.appBarButton}
                                component={'a'}
                                href={'https://github.com/soymichelt/cv-cdn/raw/master/pdf-files/curriculum.pdf'}
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
            <div className={classes.navbarSpace} />
        </>
    );
};