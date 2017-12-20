/* Node & ReactJS Modules */
import React, { Component } from 'react';

function Body(props) {

    return (

        <section className={props.className}>
            {props.children}
        </section>

    );

}

export default Body;