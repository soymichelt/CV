/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* CSS */
import './Index.css';

/* Components */
import Header from '../../../components/header/Header';
import { Aside } from '../../../components/aside/Aside';
import { Container, Row, Col } from '../../../components/grid/Grid';

class Index extends Component {

    render() {

        return (

            <section className="index-home-page">

                <Header />

                <Container className="index-container">
                    <Row>
                        <Col className="hide-on-med-and-down m4 l4">
                            <Aside />
                        </Col>
                        <Col className="s12 m12 l8">
                            <section className="card-panel">
                            </section>
                        </Col>
                    </Row>
                </Container>
                
            </section>

        );

    }

}

export default Index;