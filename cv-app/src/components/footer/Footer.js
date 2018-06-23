/* Node & ReactJS Modules */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

/* CSS */
import './Footer.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    footerSection: {
        backgroundColor: '#263238',
    },
    devSection: {
        
    },
    devContent: {
        float: 'right',
        height: 32,
    },
    devProfilePhoto: {
        width: 32,
        height: 32,
    },
});

export class Footer extends Component {

    render() {

        const { classes } = this.props;

        return (
            <footer className="footer-section">
                <Grid container className={classes.root}>
                    <Grid item xs={12} sm={6} className="blue-grey darken-4">
                        <span className="copyright">
                            &copy; Copyright - <Link to="/" className="red-text">mtraatabladaa94</Link> 2018. All rights reserved.
                        </span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <a
                            className={classes.devContent}
                            href="https://www.facebook.com/mtraatabladaa94"
                            target="_blank"
                        >
                            <img
                                className={classes.devProfilePhoto}
                                src={process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'}
                            />
                        </a>
                    </Grid>
                </Grid>
            </footer>
        );

    }

}

export default withStyles(styles)(Footer);