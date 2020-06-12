import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { footerStyles } from './footer.styles';
import Profile from './../../../assets/res/profile-64x64.png';

export const Footer = () => {

    const classes = footerStyles();

    const currentDate = (new Date()).getFullYear();

    return (
        <footer className={classes.footerSection}>
            <Grid container className={classes.root}>
                <Grid item xs={10} sm={9} className="blue-grey darken-4">
                    <span className="copyright">
                        &copy; Copyright - <Link to="/" className="red-text">soymichel.com</Link> {currentDate}.
                    </span>
                </Grid>
                <Grid item xs={2} sm={3}>
                    <a
                        className={classes.devContent}
                        href='https://www.facebook.com/mtraatabladaa94'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className={classes.devProfilePhoto}
                            src={Profile}
                            alt={'Michel Roberto Traña Tablada'}
                        />
                    </a>
                </Grid>
            </Grid>
        </footer>
    );
};