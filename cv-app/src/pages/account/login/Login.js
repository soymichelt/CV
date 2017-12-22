/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* CSS */
import './Login.css';

/* Components */
import Header from '../../../components/header/Header';
import { Aside } from '../../../components/aside/Aside';
import { Container, ContainerFluid, Row, Col } from '../../../components/grid/Grid';

class Login extends Component {

    render() {

        return (
            <section className="login-account-page">

                <Header />
                
                <Container>

                    <Row>

                        <Col className="s10 s1-offset m6 m3-offset">

                            <section className="card-panel">
                                
                            </section>

                        </Col>

                    </Row>

                </Container>

            </section>
        );

    }

}

export default Login;