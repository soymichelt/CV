import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'

import SubtitlesIcon from '@material-ui/icons/Subtitles'
import StarsIcon from '@material-ui/icons/Person'

import blueGrey from '@material-ui/core/colors/blueGrey'

const styles = (theme) => ({
    root: {
        minWidth: '100%',
    },
    avatar: {
        backgroundColor: blueGrey[50],
        color: blueGrey[500],
    },
    top: {
        alignSelf: 'flex-start',
    },
    socialContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 2,
    },
    socialAvatar: {
        marginRight: 5,
    },
});

const ContentPersonalProfileBiography = ({classes, biography, personalObjectives}) => {
    return(
        <Paper
            className={classes.root}
        >
            <List>
                <ListItem
                    button
                >
                    <Avatar
                        alt={'Michel Roberto Traña Tablada'}
                        src={process.env.PUBLIC_URL + '/res/circleProfile64x64.png'}
                    />
                    <ListItemText primary="Michel Roberto Traña Tablada" secondary="Developer app's & web sites" />
                    <ListItemSecondaryAction>
                    </ListItemSecondaryAction>
                </ListItem>
                <li>
                    <Divider inset />
                </li>
                <ListItem
                    button
                >
                    <Avatar
                        className={classnames(classes.avatar,classes.top)}
                    >
                        <SubtitlesIcon />
                    </Avatar>
                    <ListItemText
                        primary={biography}
                        secondary='Biografía breve'
                    />
                </ListItem>
                <li>
                    <Divider inset />
                </li>
                <ListItem
                    button
                >
                    <Avatar
                        className={classes.avatar}
                    >
                        <StarsIcon />
                    </Avatar>
                    <ListItemText
                        primary={personalObjectives}
                        secondary='Objetivos personales'
                    />
                </ListItem>
                <li>
                    <Divider inset />
                </li>
            </List>
            <section
                className={classes.socialContainer}
            >
                <a
                    href='https://www.facebook.com/mtraatabladaa94'
                >
                    <Avatar
                        className={classes.socialAvatar}
                        src={process.env.PUBLIC_URL + '/res/fb-64x64.png'}
                    />
                </a>
                <a
                    href='https://twitter.com/mtraatabladaa94'
                >
                    <Avatar
                        className={classes.socialAvatar}
                        src={process.env.PUBLIC_URL + '/res/tw-64x64.png'}
                    />
                </a>
                <a
                    href='https://github.com/mtraatabladaa94'
                >
                    <Avatar
                        className={classes.socialAvatar}
                        src={process.env.PUBLIC_URL + '/res/gb-black-64x64.png'}
                    />
                </a>
                <a
                    href='https://www.linkedin.com/mtraatabladaa94'
                >
                    <Avatar
                        className={classes.socialAvatar}
                        src={process.env.PUBLIC_URL + '/res/in-64x64.png'}
                    />
                </a>
                <a
                    href='https://www.instagram.com/mtraatabladaa94'
                >
                    <Avatar
                        className={classes.socialAvatar}
                        src={process.env.PUBLIC_URL + '/res/im-purple-64x64.png'}
                    />
                </a>
            </section>
        </Paper>
    );
};

ContentPersonalProfileBiography.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentPersonalProfileBiography);