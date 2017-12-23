/* Node & ReaactJS Modules */
import React, { Component } from 'react';

/* Components */
import Nav from '../menu/Nav';


class Header extends Component {

    render() {

        return (
            <header className="header-section">
                <Nav />
            </header>
        );

    }

}

export default Header;