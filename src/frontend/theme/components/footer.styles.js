import { makeStyles } from '@material-ui/core/styles';
import { red, blueGrey, } from '@material-ui/core/colors';


export const footerStyles = makeStyles({
    footerSection: {
        marginBottom: 0,
        backgroundColor: blueGrey[900],
        color: blueGrey[100],
        fontSize: '13px',
        padding: '8px 12px',
        lineHeight: '32px',
        '& a': {
            color: red[500],
            textDecoration: 'none',
        }
    },
    devContent: {
        float: 'right',
        height: 32,
    },
    devProfilePhoto: {
        width: 32,
        height: 32,
    },
});