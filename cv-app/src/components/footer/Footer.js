/* Node & ReactJS Modules */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './Footer.css';

/* Components */
import { ContainerFluid, Row, Col } from '../grid/Grid';

class Footer extends Component {

    render() {

        return (
            <footer className="footer-section">
                <ContainerFluid className="blue-grey darken-2">
                    <Row>
                        <Col className="s12 l10 offset-l1">
                            <section className="footer-content">
                            </section>
                        </Col>
                    </Row>
                </ContainerFluid>
                <ContainerFluid className="blue-grey darken-4">
                    <Row>
                        <Col className="s12 m12 l10 offset-l1">
                            <section className="footer-copyright white-text">
                                <span className="copyright">
                                    &copy; Copyright - <Link to="/" className="red-text">mtraatabladaa94</Link> 2017. All rights reserved.
                                </span>
                                <a href="https://www.facebook.com/mtraatabladaa94" target="_blank" className="developed right white-text">
                                    Diseñador y Desarrollador <span className="red-text">Michel Traña</span> <img src={process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                                </a>
                            </section>
                        </Col>
                    </Row>
                </ContainerFluid>
            </footer>
        );

    }

}

export default Footer;