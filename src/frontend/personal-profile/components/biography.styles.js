import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export const biographyStyles = makeStyles(theme => ({
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
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    socialAvatar: {
        marginRight: 5,
    },
}));