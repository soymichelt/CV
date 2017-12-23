/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* CSS */
import './Index.css';

/* Components */
import Header from '../../../components/header/Header';
import { Aside } from '../../../components/aside/Aside';
import { Container, ContainerFluid, Row, Col } from '../../../components/grid/Grid';

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
                        </Col>
                    </Row>
                </ContainerFluid>
                
            </section>

        );

    }

}

export default Index;