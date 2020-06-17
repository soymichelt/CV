import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadingStyles } from './loading.styles';

export const Loading = () => {
    const classes = loadingStyles();
    return (
        <section className={classes.container}>
            <CircularProgress
                className={classes.progress}
                size={48}
                thickness={5}
            />
            <h1
                className={classes.label}
            >
                Un momento...
            </h1>
        </section>
    );
};