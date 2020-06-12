import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/AssignmentInd';
import MapIcon from '@material-ui/icons/LocationCity';
import CakeIcon from '@material-ui/icons/Cake';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

import { generalInfoStyles } from './general-info.styles';

export const GeneralInfo = () => {

    const classes = generalInfoStyles();

    return (
        <Paper className={classes.root} elevation={3}>

            <List
                component="nav"
                subheader={<ListSubheader component="div">Información General</ListSubheader>}
            >
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="121-020994-0004R" secondary="Cédula" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <CakeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="02 de septiembre de 1994" secondary="Cumpleaños" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <MapIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Juigalpa, Chontales" secondary="Ubicación" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonPinCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="De 'Lubricentro Álvarez' 4 cuadras al oeste, 20 varas al sur, costado este de la escuela 'San Pablo'. Casas de Minvha #7. Barrio 'Carlos Nuñez'."
                        secondary="Domicilio"
                    />
                </ListItem>
            </List>

            <List
                component="nav"
                subheader={<ListSubheader component="div">Información de contacto</ListSubheader>}
            >
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="mtraatabladaa94@gmail.com" secondary="Correo electrónico" />
                </ListItem>
                <ListItem
                    button
                >
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PhoneInTalkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="(+505) 8367 - 1719" secondary="Celular Claro" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PhoneInTalkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="(+505) 7605 - 9423" secondary="Celular Movistar" />
                </ListItem>
            </List>
        </Paper>
    );

};