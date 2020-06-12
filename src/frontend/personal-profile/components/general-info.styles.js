import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export const generalInfoStyles = makeStyles({
    root: {
        minWidth: '100%',
    },
    avatar: {
        backgroundColor: blueGrey[50],
        color: blueGrey[500],
    },
});