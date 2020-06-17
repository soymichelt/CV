import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const notFoundStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100%',
    },
    image: {
        height: '100px',
    },
    informationSection: {
        maxWidth: '280px',
    },
    title: {
        fontSize: '18px',
        color: blueGrey[900],
        margin: '0px',
    },
    description: {
        fontSize: '16px',
        margin: '0px',
    },
});