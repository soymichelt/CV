/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* CSS */
import './Aside.css';

export function Aside(props) {

    return (
    
        <section className="aside-left">
            <Profile />
            <Info />
        </section>

    );

}

export function Profile(props) {

    return (

        <div className="card-profile card">
            <div className="card-image">
                <img src={process.env.PUBLIC_URL + '/Resources/Images/banner1.jpg'} />
            </div>
            <div className="center card-content">
                <img className="card-image-profile" src={process.env.PUBLIC_URL + '/Resources/Images/Profile.jpeg'} />
                <p className="right like-button-section hide">
                    <a href="#" className="likes blue-grey-text text-darken-2">
                        15 K
                    </a>
                    <a className="like-button btn btn-floating red darken-3">
                        L
                    </a>
                </p>

                <h1 className="center truncate pearson-name">
                    Ing. Michel R. Traña Tablada
                </h1>
                
                <p className="center">
                    Ingeniero en sistemas de información y desarrollador de App's de escritorio, web y móvil.
                </p>

                <p className="social-link center">
                    <a href="https://www.facebook.com/mtraatabladaa94" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/Resources/Images/Social/fb.png'} />
                    </a>
                    <a href="https://www.facebook.com/mtraatabladaa94" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/Resources/Images/Social/tw.png'} />
                    </a>
                    <a href="https://www.facebook.com/mtraatabladaa94" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/Resources/Images/Social/pr.png'} />
                    </a>
                </p>
            </div>
        </div>

    );

}

export function Info(props) {

    return (
        <section className="info-section card-panel">
            <ul className="profile-info left-align collection">
                <li className="collection-item">

                    <i className="material-icons left">phone</i>
                    
                    (+505) 8367 - 1719

                    <a href="#" className="right">
                        <i className="material-icons">chevron_right</i>
                    </a>

                </li>
                <li className="collection-item">

                    <i className="material-icons left">phone</i>
                    
                    (+505) 8590 - 0017

                    <a href="#" className="right">
                        <i className="material-icons">chevron_right</i>
                    </a>

                </li>
                <li className="collection-item">

                    <i className="material-icons left">email</i>
                    
                    mtraatabladaa94@gmail.com

                    <a href="#" className="right">
                        <i className="material-icons">chevron_right</i>
                    </a>

                </li>
            </ul>
        </section>
    );

}

export default { Aside, Profile };