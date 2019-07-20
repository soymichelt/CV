import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    card: {
        width: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

const PostCard = ({
    classes,
    avatar,
    action,
    title,
    subtitle,
    image,
    content,
    actions,
    collapsableContent,
    onExpandClick,
    expanded,
}) => {
    
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={avatar}
                action={action}
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent>
                {content}
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
                {actions}
                {collapsableContent && <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={onExpandClick}
                        aria-expanded={expanded}
                        aria-label="Ver más"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {collapsableContent}
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default withStyles(styles)(PostCard);