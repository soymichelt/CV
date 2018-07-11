/* Imports Node & ReactJS Elements */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import blueGrey from '@material-ui/core/colors/blueGrey'

/* Custom Elements */
import MyAppBar from "./MyAppBar"
import MyDrawer from "./MyDrawer"
import Footer from './../footer/Footer'

const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: '100%',
        height: 'auto',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit,
    },
});

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            light: red[700],
            main: red[800],
            dark: red[900],
            contrastText: '#fff',
        },
        secondary: {
            light: blueGrey[700],
            main: blueGrey[800],
            dark: blueGrey[900],
            contrastText: '#000',
        },
    },
});

export class Theme extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    state = {
        open: false,
    };
  
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { classes, children } = this.props;

        return (

            <MuiThemeProvider theme={theme}>

                <div className={classes.root}>

                    <MyAppBar
                        open={this.state.open}
                        onDrawerOpen={this.handleDrawerOpen}
                    />

                    <MyDrawer
                        open={this.state.open}
                        onDrawerClose={this.handleDrawerClose}
                    />

                    <main className={classes.content}>
                        
                        <div className={classes.toolbar} />
                        
                        {children}

                        <Footer />

                    </main>

                </div>

            </MuiThemeProvider>

        )

    }

}

export default withStyles(styles)(Theme);