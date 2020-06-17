import React from 'react';
import NotFoundImage from './../../../assets/res/not-found.png';
import { notFoundStyles } from './not-found.styles';

export const NotFound = ({ title, description, minHeight }) => {
    const classes = notFoundStyles();
    return (
        <section style={ minHeight && { minHeight: minHeight, } }>
            <section className={classes.container}>
                <img className={classes.image} src={NotFoundImage} alt={'Not found'} />
                <section className={classes.informationSection}>
                    <h1 className={classes.title}>{title}</h1>
                    <p className={classes.description}>{description}</p>
                </section>
            </section>
        </section>
    );
};