import { makeStyles, fade, } from '@material-ui/core/styles';

export const navBarStyles = makeStyles(theme => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        minHeight: 60,
    },
    appBarButton: {
        color: 'rgba(255,255,255,0.7)',
    },
    appBarShift: {
        paddingRight: '0px!important',
    },
    flex: {
        flex: 1,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 12,
    },
    menuButtonRightSection: {
        marginRight: 12,
    },
    toolbar: {
        minHeight: 60,
    },
    imagoTipo: {
        maxHeight: 32,
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 8,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(6),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(6),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 115,
            '&:focus': {
                width: 190,
            },
        },
    },
    
}));