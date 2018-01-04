/* Node & ReactJS Modules */
import React from "react";
import { Link } from 'react-router-dom';

/* Components */
import { ContainerFluid, Row, Col } from '../grid/Grid';

/* CSS */
import './Nav.css';

export function Nav(props) {

    return (

        <div className="navbar-fixed-component navbar-fixed">
            <nav className="nav-extended white z-depth-1">
                <ContainerFluid>
                    <Row>
                        <Col className="s12 m12 l10 offset-l1">
                            <div className="nav-wrapper">
                                <a href="#" data-activates="mobile-section" className="button-collapse black-text"><i className="material-icons">menu</i></a>
                                <a className="brand-logo" href="#home-section">
                                    <img className="mnu-logo" src={process.env.PUBLIC_URL + '/Resources/Images/Imagotipo.png'} />
                                </a>
                                <ul className="right hide-on-med-and-down">
                                    <li>
                                        <a href="#home-section" className="mnu-primary blue-grey-text text-darken-3">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="#about-section" className="mnu-primary blue-grey-text text-darken-3">Sobre mí</a>
                                    </li>
                                    <li>
                                        <a href="#contact-section" className="mnu-primary blue-grey-text text-darken-3">
                                            Contáctame
                                            <img className="mnu-image" src={process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/account/login" className="mnu-primary mnu-last btn red darken-3">
                                            <i className="material-icons right">account_circle</i>
                                            Entrar
                                        </Link>
                                    </li>
                                </ul>
                                <ul id="mobile-section" className="main-mobile-section side-nav">
                                    <li className="side-nav-profile">
                                        <a className="link" href="#home-section">
                                            <section className="side-nav-profile-content">
                                                <p className="blue-grey-text text-darken-4">
                                                    <img className="left" src={process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                                                    <span className="title truncate">
                                                        Ing. Michel Traña Tablada
                                                    </span>
                                                    <span className="subtitle truncate">
                                                        (+505) 8367 1719
                                                    </span>
                                                </p>
                                            </section>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home-section" className="mnu-primary blue-grey-text text-darken-4">
                                            <i className="material-icons blue-grey-text text-darken-3">home</i>
                                            <i className="material-icons right">chevron_right</i>
                                            Inicio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about-section" className="mnu-primary blue-grey-text text-darken-4">
                                            <i className="material-icons blue-grey-text text-darken-3">person_pin</i>
                                            <i className="material-icons right">chevron_right</i>
                                            Sobre mí
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact-section" className="mnu-primary blue-grey-text text-darken-4">
                                            <i className="material-icons blue-grey-text text-darken-3">local_phone</i>
                                            <i className="material-icons right">chevron_right</i>
                                            Contáctame
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/account/login" className="mnu-primary btn red darken-3">
                                            Entrar
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </ContainerFluid>
            </nav>
        </div>
        
    );
}

/* <div class="nav-content red lighten-1">
        <Container className="nav-content-container">
            <span class="nav-title">Title</span>
            <a class="btn-floating btn-large halfway-fab waves-effect waves-light red darken-4">
                <i class="material-icons">chat</i>
            </a>
        </Container>
    </div> */

export default Nav;