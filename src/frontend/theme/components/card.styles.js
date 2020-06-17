import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export const cardStyles = makeStyles(theme => ({
    card: {
        width: 340,
        maxWidth: 340,
    },
    header: {
        display: 'block',
        width: 241,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'left',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        paddingBottom: '16px!important',
    },
    socialSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalDivider: {
        backgroundColor: '#EBEBEB',
        width: '1px',
        height: '25px',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    favSection: {
        width: '40%',
        textAlign: 'right',
    },
    shareSection: {
        width: '40%',
        textAlign: 'left',
    },
    value: {
        margin: '0',
        fontSize: '14px',
        fontWeight: '500',
        color: blueGrey[800],
    },
    label: {
        margin: '0',
        fontSize: '11px',
        color: blueGrey[100],
    },
    iconButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        marginLeft: 2,
        marginRight: 2,
    },
}));