import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const loadingStyles = makeStyles({
    container: {
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress: {
        color: lightBlue[600],
    },
    label: {
        fontSize: '18px',
        color: blueGrey[900],
    },
});