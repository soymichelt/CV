/* Node & ReactJS Modules */
import React, { Component } from 'react';
import './Aside.css';

/* CSS */

export function Aside(props) {

    return (
    
        <section className="aside-left">
            <Profile />
        </section>

    );

}

export function Profile(props) {

    return (

        <div className="card-profile card">
            <div className="card-image">
                <img src={process.env.PUBLIC_URL + '/Resources/Images/banner1.jpg'} />
            </div>
            <div className="card-content">
                <img className="left card-image-profile" src={process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                <h1 className="truncate pearson-name">
                    Michel R. Traña Tablada
                </h1>
                <p>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </p>
            </div>
        </div>

    );

}

export default { Aside, Profile };