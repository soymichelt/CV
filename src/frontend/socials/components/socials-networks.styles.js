import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, red, } from '@material-ui/core/colors';
import SocialsNetworksSVG from './../../../assets/res/socials-networks-pattern.svg';

export const socialsNetworksStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '350px',
        backgroundColor: blueGrey[700],
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&::before': {
            width: '100%',
            height: '100%',
            content: '""',
            backgroundImage: `url("${SocialsNetworksSVG}")`,
            backgroundPositionX: 'center',
            opacity: '.1',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        },
    },
    title: {
        margin: 0,
        marginBottom: '16px',
        fontSize: '28px',
        fontWeight: 500,
        fontFamily: 'Roboto',
        color: blueGrey[900],
        zIndex: 1000,
        textAlign: 'center',
    },
    containerForm: {
        padding: '32px 16px',
        width: '100%',
        position: 'relative',
        zIndex: 1000,
        boxSizing: 'border-box',
    },
    emailRoot: {
        width: '100%',
        height: '41px',
        padding: 0,
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    emailInput: {
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
        border: '1px solid #e7e7e7',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#aaa',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    emailLabel: {
        fontSize: 18,
    },
    wrapperButton: {
        position: 'relative',
    },
    phoneLink: {
        textDecoration: 'none',
    },
    suscribeButton: {
        width: '100%',
        height: '41px',
        background: 'linear-gradient(to right, ' + red[800] + ', ' + red[600] +')',
        color: '#FFFFFF',
        borderBottom: '4px solid ' + red[900],
    },
    followMeCaption: {
        margin: 0,
        marginTop: '18px',
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'Roboto',
        color: blueGrey[900],
        zIndex: 1000,
        textAlign: 'center',
        height: '32px',
        lineHeight: '32px!important',
        verticalAlign: 'middle',
    },
    dividerOr: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '18px',
        maxWidth: '320px',
    },
    divider: {
        flex: 1,
        height: 1,
        background: '#EFEFEF',
    },
    or: {
        width: '48px',
        textAlign: 'center',
    },
    avatar: {
        width: '32px',
        height: '32px',
        marginLeft: '4px',
        lineHeight: '32px!important',
        verticalAlign: 'middle',
    },
}));