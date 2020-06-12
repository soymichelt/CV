import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DrawerMaterial from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store'
import SendIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom';

import { drawerStyles } from './drawer.styles';

const primaryListItems = (
    <div>
        <ListItem button component={Link} to={'/'}>
            <ListItemIcon>
                <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={'a'} href={'https://github.com/soymichelt/cv-cdn/raw/master/pdf-files/curriculum.pdf'} target={'_blank'}>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Currículum" />
        </ListItem>
    </div>
);

const secondaryListItems = (
    <div>
        <ListItem
            button
            component={Link}
            to={'/Account/Signin'}
        >
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Iniciar sesión" />
        </ListItem>
    </div>
);

export const Drawer = ({
    openDrawer,
    onDrawerClose,
}) => {

    const classes = drawerStyles();

    return (
        <DrawerMaterial
            open={openDrawer}
            onClose={onDrawerClose}
        >
            <div
                tabIndex={0}
                role="button"
                onClose={onDrawerClose}
            >
                <div className={classes.drawerList}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton onClick={onDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>{primaryListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </div>
            </div>
        </DrawerMaterial>
    );

};