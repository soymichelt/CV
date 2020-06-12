import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

import { jobsStyles } from './jobs.styles';

export const Jobs = () => {

    const classes = jobsStyles();

    return (
        <Paper className={classes.root} elevation={3}>
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div">
                        Experiencia en empresas
                    </ListSubheader>
                }
            >
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Responsable Área de Informática en Biblioteca"
                        secondary="UNAN, Managua • Juigalpa, Chontales • (+505) 2512 - 2829 • (2013-Actual)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Frontend Developer" secondary="Diseñologia CR • Freelance • (+506) 8607 - 0451 • (2014-2016)" />
                </ListItem>
            </List>
        </Paper>
    );
};