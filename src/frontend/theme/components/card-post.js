import React from 'react';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { cardPostStyles } from './card-post.styles';

export const CardPost = ({
    avatar,
    actionHeader,
    title,
    subtitle,
    image,
    content,
    actions,
    collapsableContent,
    onExpandClick,
    expanded,
}) => {
    const classes = cardPostStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={avatar}
                classes={{
                    avatar: classes.avatarPending,
                }}
                action={actionHeader}
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                className={classes.media}
                classes={{
                    media: classes.mediaPending,
                }}
                image={image}
                title={title}
            />
            <CardContent>
                {content}
            </CardContent>
            <CardActions className={classes.actions}>
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
    );
};