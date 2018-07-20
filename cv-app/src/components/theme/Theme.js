/* Imports Node & ReactJS Elements */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'
import blueGrey from '@material-ui/core/colors/blueGrey'

/* Custom Elements */
import MyAppBar from "./MyAppBar"
import MyDrawer from "./MyDrawer"
import Footer from './../footer/Footer'

import './../theme/Sticky.css'

/* Actions */
import { onScrollTop } from './../../state/actions/stickyAppBarAction'

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
        ...theme.mixins.toolbar,
        minHeight: '72px!important',
    },
    content: {
        flexGrow: 1,
    },
});

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            light: deepOrange[700],
            main: deepOrange[800],
            dark: deepOrange[900],
        },
        secondary: {
            light: blueGrey[700],
            main: blueGrey[800],
            dark: blueGrey[900],
            contrastText: '#000',
        },
    },
    overrides: {
        MuiInput: {
            underline: {
                borderBottom: '2px solid ' + blueGrey[600],
            },
        },
    },
});

export class Theme extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    state = {
        open: false,
    };
  
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleScroll = (event) => {

        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let newScrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        
        var myAppBar = document.getElementById('myAppBar');

        if(newScrollTop >= 416) {
            myAppBar.style.marginTop = ((416 - newScrollTop)) + 'px';
        } else {
            myAppBar.style.marginTop = '0px';
        }

        if(newScrollTop > 0) {
            myAppBar.style.boxShadow = '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)';
        }
        else {
            myAppBar.style.boxShadow = 'none';
        }
    
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

    componentDidMount() {

        document.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount() {

        document.removeEventListener('scroll', this.handleScroll);

    }

}

const ThemeWithStyles = withStyles(styles)(Theme);

const mapStateToProps = (newState, props) => {

    var { stickyAppBar } = newState;

    if(!stickyAppBar) {
        stickyAppBar = {
            scrollTop: 0,
        };
    }

    const { scrollTop } = stickyAppBar;

    return ({
        scrollTop: scrollTop ? scrollTop : 0,
    });

};

const mapDispatchToProps = (dispatch) => ({

    onScrollTop: (value) => dispatch(onScrollTop(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeWithStyles);