/* Node & ReactJS Modules */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './Index.css';

/* Components */
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { Aside } from '../../../components/aside/Aside';
import { ContainerFluid, Row, Col } from '../../../components/grid/Grid';
import FormContact from '../../../components/form-contact/FormContact';
import FixedActionButton from '../../../components/fixed-action-button/FixedActionButton';

class Index extends Component {

    render() {

        return (

            <section className="index-home-page">

                <Header />

                <ContainerFluid className="index-container">
                    <Row>
                        <Col className="hide-on-med-and-down m3 l3 offset-l1">
                            <Aside />
                        </Col>
                        <Col className="s12 m12 l7">
                            <section className="card-panel">
                            </section>

                            <section className="card-panel">
                                <FormContact />
                            </section>
                        </Col>
                    </Row>
                </ContainerFluid>

                <FixedActionButton />

                <Footer />
                
            </section>

        );

    }

}

export default Index;