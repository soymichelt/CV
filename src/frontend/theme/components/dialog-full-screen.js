import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/KeyboardArrowLeft';
import Slide from '@material-ui/core/Slide';
import { dialogFullScreenStyles } from './dialog-full-screen.styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogFullScreen = ({
    onClose,
    open,
    title,
    operations,
    children,
}) => {
    const classes = dialogFullScreenStyles();
    return (
        <Dialog
            fullScreen open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            classes={{
                paperFullScreen: classes.paperFullScreen,
            }}
        >
            <AppBar position='fixed' style={{ background: 'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))', }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="subtitle1" className={classes.title}>
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