import { makeStyles } from '@material-ui/core/styles';

export const contentStyles = makeStyles({
    content: {
        position: 'relative',
        textAlign: 'center',
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#FFF',
        zIndex: 800,
    },
    profile: {
        width: 128,
        height: 128,
        margin: '0 auto',
    },
    fontProfile: {
        fontFamily: '"Roboto", Arial, sans-serif',
        fontWeight: 300,
    },
    primaryText: {
        margin: 0,
        fontWeight: 500,
        fontSize: 24,
    },
    secondaryText: {
        margin: 0,
        fontSize: 20,
    },
    otherText: {
        margin: 0,
        fontSize: 18,
    },
    social: {
        margin: '0 auto',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
        width: 112,
    },
});