import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
} from '@material-ui/core'
import {
    blueGrey,
} from '@material-ui/core/colors'
import {
    Favorite as FavoriteIcon,
    Share as ShareIcon,
    KeyboardArrowDown as ArrowDownIcon,
} from '@material-ui/icons'

const styles = {
    card: {
        display: 'flex',
        height: '200px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
    },
    content: {
        flex: '1 0 auto',
        paddingBottom: 0,
    },
    cover: {
        flex: 1,
    },
    controls: {
        padding: '0px 12px 12px 12px',
    },
    chip: {
        backgroundColor: blueGrey[600],
        color: blueGrey[100],
        borderRadius: '10px',
        padding: '2px 4px',
    },
};

const TimelineCard = (props) => {

    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={process.env.PUBLIC_URL + '/res/profile.jpeg'}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography
                        component="h5"
                        variant="subheading"
                    >
                        Programación Funcional vs Programación Orientada a Objetos
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        Traña Michael • 31 dic 2019 • <span className={classes.chip}>Artículo</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textPrimary"
                        style={{ textOverflow: 'ellipsis', overflow: 'hidden', height: '60px', }}
                    >
                        En estos tiempos cambiantes, donde la tecnología avanza a pasos gigantes tenemos herramientas tan impresionantes que nos permiten hacer cosas que hace años solo soñabamos.
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <div>
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Card>
    )

}

export default withStyles(styles)(TimelineCard)