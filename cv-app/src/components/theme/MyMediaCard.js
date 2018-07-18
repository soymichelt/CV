/*
    Media Card
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

/*import PersonIcon from '@material-ui/icons/Person'
import blue from '@material-ui/core/colors/blue'*/

const styles = theme => ({
    card: {
        width: 345,
        maxWidth: 345,
    },
    header: {
        display: 'block',
        width: 241,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    /*cardActions: {
        borderTop: '1px solid #EBEBEB',
    },*/
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

const MyMediaCard = ({classes, key, avatar, photoURL, photoDescription, cardTitle, cardSubtitle, cardFavSelected, cardFavs, cardShares}) => (

    <Card
        className={classes.card}
        elevation={1}
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
        />
        <CardMedia
            className={classes.media}
            image={photoURL}
            title={photoDescription}
        />
        <CardContent
            className={classes.cardContent}
        >
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
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={classes.iconButton}
                    aria-label="Compartir"
                >
                    <ShareIcon />
                </IconButton>
            </section>
        </CardContent>
    </Card>

);

MyMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyMediaCard);