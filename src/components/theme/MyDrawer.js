/* Imports Node & ReactJS Elements */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store'
import InboxIcon from '@material-ui/icons/Timeline';
import SendIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <ListItem
      button
      component={Link}
      to={'/'}
    >
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to={'/Timeline'}
    >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Timeline" />
    </ListItem>
    <ListItem
      button
      component={'a'}
      href={process.env.PUBLIC_URL + '/res/curriculum.pdf'}
      target={'_blank'}
    >
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Currículum" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem
      button
      component={Link}
      to={'/Signin'}
    >
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Iniciar sesión" />
    </ListItem>
  </div>
);

export const drawerWidth = 260;

const styles = theme => ({
    drawerList: {
      width: drawerWidth,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        minHeight: 72,
    },
});

export const MyDrawer = ({ classes, theme, open, onDrawerClose }) => (
  <Drawer
    open={open}
    onClose={onDrawerClose}
  >
    <div
      tabIndex={0}
      role="button"
      onClose={onDrawerClose}
    >
      <div
        className={classes.drawerList}
      >
        <Toolbar
          className={classes.toolbar}
        >
            <IconButton onClick={onDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </Toolbar>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    </div>
  </Drawer>
);
  
MyDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyDrawer);