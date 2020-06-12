import { makeStyles } from '@material-ui/core/styles';

export const categoriesStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#FFF',
        padding: '10px',
        position: 'relative',
        zIndex: 1,
    },
    tag: {
        margin: theme.spacing(1) / 4,
        backgroundColor: 'rgba(0,0,0,0.03)',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)!important',
            cursor: 'pointer',
        },
    },
    tagActive: {
        backgroundColor: '#c62828!important',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#c62828!important',
            color: '#FFF',
        },
        '&:active': {
            backgroundColor: '#c62828!important',
            color: '#FFF',
        },
    },
    categorySection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortSection: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));