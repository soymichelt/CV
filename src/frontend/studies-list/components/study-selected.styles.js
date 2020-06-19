import { makeStyles } from '@material-ui/core/styles';

export const studySelectedStyles = makeStyles(theme => ({
    container: {
        maxWidth: '100%',
        minHeight: '215px',
        marginTop: theme.spacing(3),
    },
    containerCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));