/*
    Media Card
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

const MyMediaCard = ({classes, key, photoURL, photoDescription, cardTitle, cardDescription}) => (

    <Card
        className={classes.card}
    >
        <CardMedia
            className={classes.media}
            image={photoURL}
            title={photoDescription}
        />
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                {cardTitle}
            </Typography>
            <Typography component="p">
                {cardDescription}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton aria-label="Me gusta">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Compartir">
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>

);

export default withStyles(styles)(MyMediaCard);