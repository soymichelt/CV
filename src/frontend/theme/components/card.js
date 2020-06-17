import React from 'react';
import CardMaterial from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import TouchRipple from '@material-ui/core/ButtonBase';
import { cardStyles } from './card.styles';

export const Card = ({
    avatar,
    photo,
    title,
    subtitle,
    favs,
    onClickFav,
    shares,
    onClickShare,
    onClickCard,
}) => {
    const classes = cardStyles();
    return (
        <TouchRipple>
            <CardMaterial className={classes.card} elevation={3} onClick={onClickCard}>
                <CardHeader
                    avatar={avatar}
                    title={
                        <span className={classes.header}>
                            {title}
                        </span>
                    }
                    subheader={
                        <span className={classes.header}>
                            {subtitle}
                        </span>
                    }
                />
                <CardMedia className={classes.media} image={photo} title={title} />
                <CardContent className={classes.cardContent}>
                    <section className={classes.socialSection}>
                        <div className={classes.favSection}>
                            <p className={classes.value}>{favs}</p>
                            <p className={classes.label}>Likes</p>
                        </div>
                        <div className={classes.verticalDivider} />
                        <div className={classes.shareSection}>
                            <p className={classes.value}>{shares}</p>
                            <p className={classes.label}>Shares</p>
                        </div>
                    </section>
                    <section className={classes.socialSection}>
                        <IconButton className={classes.iconButton} onClick={onClickFav}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton className={classes.iconButton} onClick={onClickShare}>
                            <ShareIcon />
                        </IconButton>
                    </section>
                </CardContent>
            </CardMaterial>
        </TouchRipple>
    );
};