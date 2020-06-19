import { makeStyles } from '@material-ui/core/styles';

export const dialogFullScreenStyles = makeStyles(theme => ({
    title: {
        marginLeft: theme.spacing(3),
        flex: 1,
        color: '#fff',
    },
    toolbar: {
        display: 'flex',
        ...theme.mixins.toolbar,
        minHeight: '66px!important',
    },
    paperFullScreen: {
        backgroundColor: 'rgba(0,0,0,0.3)!important',
    },
}));