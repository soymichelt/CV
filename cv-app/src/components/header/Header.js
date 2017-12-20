/* Node & ReaactJS Modules */
import React, { Component } from 'react';

/* Components */
import Nav from '../menu/Nav';


class Header extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <Nav />
        );

    }

}

export default Header;