import React, { useState, } from 'react';
import { Helmet, } from 'react-helmet';

import { Footer } from '../components/footer';
import { NavBar } from '../components/navbar';
import { Drawer } from '../components/drawer';

import { MuiThemeProvider, createMuiTheme, } from '@material-ui/core/styles';
import { purple, red, } from '@material-ui/core/colors';
import { SocialsNetworks } from './../../socials/components/socials-networks';

const theme = createMuiTheme({
    primary: purple,
    secondary: red,
});

export const Layout = ({ children, title }) => {

    const [ openDrawer, setOpenDrawer ] = useState(false);

    const handleDrawerOpen = () => setOpenDrawer(true);
    const handleDrawerClose = () => setOpenDrawer(false);

    return (
        <>
            <Helmet>
                <title>{title} - soymichel</title>
            </Helmet>
            <MuiThemeProvider theme={theme}>
                <NavBar openDrawer={openDrawer} onDrawerOpen={handleDrawerOpen}  />
                <Drawer openDrawer={openDrawer} onDrawerClose={handleDrawerClose} />
                {children}
                <SocialsNetworks />
                <Footer />
            </MuiThemeProvider>
        </>
    );
};