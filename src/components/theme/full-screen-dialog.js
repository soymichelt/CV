import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/KeyboardArrowLeft';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    title: {
        marginLeft: theme.spacing.unit * 3,
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
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({
    onClose,
    open,
    classes,
    title,
    operations,
    children,
}) => {

    return (
        <Dialog
            fullScreen open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            classes={{
                paperFullScreen: classes.paperFullScreen,
            }}
        >
            <AppBar position={'fixed'}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="title" className={classes.title}>
                        {title}
                    </Typography>
                    <div>
                        {operations}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
            {children}
        </Dialog>
    );
};

export default withStyles(styles, { withTheme: true })(FullScreenDialog);