/*
    Publish Card
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import blueGrey from '@material-ui/core/colors/blueGrey'
import MoreVertIcon from '@material-ui/icons/MoreVert'

/*import PersonIcon from '@material-ui/icons/Person'
import blue from '@material-ui/core/colors/blue'*/

const styles = theme => ({
    card: {
        width: '100%',
    },
    header: {
        display: 'block',
        //width: 'calc(100% - 48px - 40px - 16px)',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    media: {
        height: 0,
        paddingTop: '52.32%', // 16:9
    },
    cardContent: {
        paddingBottom: '16px!important',
    },
    socialSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalDivider: {
        backgroundColor: '#EBEBEB',
        width: '1px',
        height: '25px',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    favSection: {
        width: '40%',
        textAlign: 'right',
    },
    shareSection: {
        width: '40%',
        textAlign: 'left',
    },
    value: {
        margin: '0',
        fontSize: '14px',
        fontWeight: '500',
        color: blueGrey[800],
    },
    label: {
        margin: '0',
        fontSize: '11px',
        color: blueGrey[100],
    },
    iconButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        marginLeft: 2,
        marginRight: 2,
    },
    /*iconProfile: {
        backgroundColor: blue[50],
        color: blue[500],
    },*/
});

const PublishCard = ({classes, children, withoutDivider, key, avatar, photoURL, photoDescription, cardTitle, cardSubtitle, cardFavSelected, cardFavs, onClickFav, cardShares, onClickShare}) => (

    <Card
        elevation={0}
        className={classes.card}
        style={
            !withoutDivider ? {
                borderBottom: '1px solid #ECEFF1',
                borderRadius: 0,
            } : null
        }
    >
        <CardHeader
            avatar={avatar}
            title={
                <span
                    className={classes.header}
                >
                    {cardTitle}
                </span>
            }
            subheader={
                <span
                    className={classes.header}
                >
                    {cardSubtitle}
                </span>
            }
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
        />
        <CardMedia
            className={classes.media}
            image={photoURL}
            title={photoDescription}
        />
        <CardContent
            className={classes.cardContent}
        >
            <section>
                {children}
            </section>
            <section
                className={classes.socialSection}
            >
                <div
                    className={classes.favSection}
                >
                    <p
                        className={classes.value}
                    >
                        {cardFavs}
                    </p>
                    <p className={classes.label}>
                        Likes
                    </p>
                </div>
                <div
                    className={classes.verticalDivider}
                />
                <div className={classes.shareSection}>
                    <p
                        className={classes.value}
                    >
                        {cardShares}
                    </p>
                    <p
                        className={classes.label}
                    >
                        Shares
                    </p>
                </div>
            </section>
            <section className={classes.socialSection}>
                <IconButton
                    className={classes.iconButton}
                    aria-label="Me gusta"
                    onClick={onClickFav}
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={classes.iconButton}
                    aria-label="Compartir"
                    onClick={onClickShare}
                >
                    <ShareIcon />
                </IconButton>
            </section>
        </CardContent>
    </Card>

);

PublishCard.propTypes = {
    classes: PropTypes.object.isRequired,
    withoutDivider: PropTypes.bool,
};

export default withStyles(styles)(PublishCard);