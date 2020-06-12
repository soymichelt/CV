import { makeStyles, } from '@material-ui/core/styles';

export const profileStyles = makeStyles({

    portroit: {
        maxWidth: '100%',
        maxHeight: 416,
        position: 'relative',
    },
    images: {
        maxWidth: '100%',
        position: 'relative',
        textAlign: 'center',
        height: 416,
        color: '#FFF',
        overflow: 'hidden',
    },
    backgroundImage: {
        position: 'absolute',
        objectFit: 'cover',
        zIndex: 1,
    },
    background1: {
        left: 0,
        right: 0,
        minHeight: 416,
        width: '100%',
    },
    background2: {
        top: -8,
        right: '-5%',
        minHeight: 400,
        height: 400,
    },

});