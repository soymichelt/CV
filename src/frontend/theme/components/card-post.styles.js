import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const cardPostStyles = makeStyles(theme => ({
    card: {
        width: '100%',
    },
    media: {
        height: 0,
        paddingTop: '75%', // 16:9
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
    mediaPending: {
        backgroundColor: blueGrey[100],
    },
    avatarPending: {
        borderRadius: '50%',
        backgroundColor: blueGrey[100],
    },
}));