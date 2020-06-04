import React, { useState, } from 'react';
import { Helmet, } from 'react-helmet';

import { Footer } from './footer';
import { NavBar } from './navbar/navbar';
import { Drawer } from './navbar/drawer';

export const Layout = ({ children, title }) => {

    const [ openDrawer, setOpenDrawer ] = useState(false);

    const handleDrawerOpen = () => setOpenDrawer(true);
    const handleDrawerClose = () => setOpenDrawer(false);

    return (
        <>
            <Helmet>
                <title>{title} - soymichel</title>
            </Helmet>
            <div>
                <NavBar openDrawer={openDrawer} onDrawerOpen={handleDrawerOpen} />
                <Drawer openDrawer={openDrawer} onDrawerClose={handleDrawerClose} />
                {children}
                <Footer />
            </div>
        </>
    );
};