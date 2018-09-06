/*
    Listado de Empleos
*/
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import WorkIcon from '@material-ui/icons/Work'

import blueGrey from '@material-ui/core/colors/blueGrey'

const styles = () => ({
    root: {
        minWidth: '100%',
    },
    avatar: {
        backgroundColor: blueGrey[50],
        color: blueGrey[500],
    },
});

const ContentPersonalProfileJobs = ({classes, data}) => {
    return(
        <Paper
            className={classes.root}
        >
            <List
                component="nav"
                subheader={
                    <ListSubheader
                        component="div"
                    >
                        Experiencia en empresas
                    </ListSubheader>
                }
            >
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <WorkIcon />
                    </Avatar>
                    <ListItemText
                        primary="Responsable Área de Informática en Biblioteca"
                        secondary="UNAN, Managua • Juigalpa, Chontales • (+505) 2512 - 2829 • (2013-Actual)"
                    />
                </ListItem>
                <ListItem>
                    <Avatar
                        className={classes.avatar}
                    >
                        <WorkIcon />
                    </Avatar>
                    <ListItemText primary="Freelance Programador y Diseñador Web" secondary="Diseñologia CR • Juigalpa, Chontales • (+506) 8607 - 0451 • (2014-2016)" />
                </ListItem>
            </List>
        </Paper>
    );
};

ContentPersonalProfileJobs.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array,
};

export default withStyles(styles)(ContentPersonalProfileJobs);