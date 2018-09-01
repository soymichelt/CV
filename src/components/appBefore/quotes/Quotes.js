/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* CSS */
import './Quotes.css';

/* Components */
import { Header } from '../../../components/header/Header';
import { Footer } from '../../../components/footer/Footer';
import { Aside } from '../../../components/aside/Aside';
import { ContainerFluid, Row, Col } from '../../../components/grid/Grid';
import { FixedActionButton } from '../../../components/fixed-action-button/FixedActionButton';

class Quotes extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(

            <section className="quotes-home-page">

                <Header />

                <ContainerFluid className="index-container">
                    <Row>
                        <Col className="hide-on-med-and-down m3 l3 offset-l1">
                            <Aside />
                        </Col>
                        <Col className="s12 m12 l7">
                            
                        </Col>
                    </Row>
                </ContainerFluid>

                <FixedActionButton />

                <Footer />

            </section>

        );

    }

}

export default Quotes;