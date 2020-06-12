import React from 'react';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import StarsIcon from '@material-ui/icons/Person';

import ProfileImage from './../../../assets/res/profile-64x64.png';
import Fb from './../../../assets/res/fb.png';
import Fb2x from './../../../assets/res/fb-64x64.png';
import Tw from './../../../assets/res/tw.png';
import Tw2x from './../../../assets/res/tw-64x64.png';
import Gb from './../../../assets/res/gb-dark.png';
import Gb2x from './../../../assets/res/gb-dark-64x64.png';
import In from './../../../assets/res/in.png';
import In2x from './../../../assets/res/in-64x64.png';
import Im from './../../../assets/res/im.png';
import Im2x from './../../../assets/res/im-64x64.png';

import { biographyStyles } from './biography.styles';

export const Biography = () => {

    const classes = biographyStyles();

    return(
        <Paper
            className={classes.root}
            elevation={3}
        >
            <List>
                <ListItem
                    button
                >
                    <ListItemAvatar>
                        <Avatar
                            alt={'Michel Roberto Traña Tablada'}
                            src={ProfileImage}
                        />
                    </ListItemAvatar>
                    <ListItemText primary="Michel Roberto Traña Tablada" secondary="Developer app's & web sites" />
                    <ListItemSecondaryAction>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant='inset' component='li' />
                <ListItem
                    button
                >
                    <ListItemAvatar>
                        <Avatar
                            className={classnames(classes.avatar,classes.top)}
                        >
                            <SubtitlesIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <span>
                                Nicaragüense nacido el 02 de septiembre de 1994. Egresado como ingeniero en sistemas de información por la UNAN, Managua. Me considero un entusiasta por la programación; fiel defensor del uso de TDD y patrones de diseño. Cada día trato de aprender algo nuevo. Otros hobbies son la lectura y escritura (en esto no me considero muy bueno). Trabajo para algún día llegar a ser un gran <b>{'<senior-programmer />'}</b>.
                            </span>
                        }
                        secondary='Biografía breve'
                    />
                </ListItem>
                <Divider variant='inset' component='li' />
                <ListItem
                    button
                >
                    <ListItemAvatar>
                        <Avatar
                            className={classes.avatar}
                        >
                            <StarsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary='Crecer personal, académica y profesionalmente.'
                        secondary='Objetivos personales'
                    />
                </ListItem>
                <Divider variant='inset' component='li' />
            </List>
            <section
                className={classes.socialContainer}
            >
                <a href='https://www.facebook.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <Avatar className={classes.socialAvatar} src={Fb} srcSet={`${Fb2x} 2x`} alt={'Facebook: soymichel.com'} />
                </a>
                <a href='https://twitter.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <Avatar className={classes.socialAvatar} src={Tw} srcSet={`${Tw2x} 2x`} alt={'Twitter: soymichel.com'} />
                </a>
                <a href='https://github.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <Avatar className={classes.socialAvatar} src={Gb} srcSet={`${Gb2x} 2x`} alt={'Github: soymichel.com'} />
                </a>
                <a href='https://www.linkedin.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <Avatar className={classes.socialAvatar} src={In} srcSet={`${In2x} 2x`} alt={'Linkedin: soymichel.com'} />
                </a>
                <a href='https://www.instagram.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                    <Avatar className={classes.socialAvatar} src={Im} srcSet={`${Im2x} 2x`} alt={'Instagram: soymichel.com'} />
                </a>
            </section>
        </Paper>
    );
};