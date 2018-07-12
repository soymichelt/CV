/*
    Información Personal Básica
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

import ImageIcon from '@material-ui/icons/AssignmentInd'
import MapIcon from '@material-ui/icons/LocationCity'
import CakeIcon from '@material-ui/icons/Cake'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle'
import EmailIcon from '@material-ui/icons/Email'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'

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

const ContentPersonalProfileGeneral = ({classes, data}) => {
    return(
        <Paper
            className={classes.root}
        >

            <List
                component="nav"
                subheader={<ListSubheader component="div">Información General</ListSubheader>}
            >
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary="121-020994-0004R" secondary="Cédula" />
                </ListItem>
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <CakeIcon />
                    </Avatar>
                    <ListItemText
                        primary="02 de septiembre de 1994"
                        secondary="Cumpleaños"
                    />
                </ListItem>
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <MapIcon />
                    </Avatar>
                    <ListItemText
                        primary="Juigalpa, Chontales"
                        secondary="Ubicación"
                    />
                </ListItem>
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <PersonPinCircleIcon />
                    </Avatar>
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
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <EmailIcon />
                    </Avatar>
                    <ListItemText primary="mtraatabladaa94@gmail.com" secondary="Correo electrónico" />
                </ListItem>
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <PhoneInTalkIcon />
                    </Avatar>
                    <ListItemText
                        primary="(+505) 8367 - 1719"
                        secondary="Celular Claro"
                    />
                </ListItem>
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <PhoneInTalkIcon />
                    </Avatar>
                    <ListItemText
                        primary="(+505) 7605 - 9423"
                        secondary="Celular Movistar"
                    />
                </ListItem>
            </List>
        </Paper>
    );
};

ContentPersonalProfileGeneral.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object,
};

export default withStyles(styles)(ContentPersonalProfileGeneral);