/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './FormOpine.css';

/* Components */
import { Row, Col } from '../grid/Grid';
import { Modal, ModalTitle, ModalContent, ModalFooter } from '../modal/Modal';
import { InputText, InputTextArea } from '../form-controls/InputText';

/* Helpers */
import { getAttribute } from '../../helpers/Attribute';

export function FormOpine (props) {

    return(

        <Modal id={ getAttribute(props.id) }>
        
            <ModalContent>

                <ModalTitle title="Opina lo que piensas de mí"></ModalTitle>

                <section className="form-controls-opine">
                    <Row>

                        <Col className="s12 m6">
                            <InputText id="name" name="name" placeholder="Nombre (obligatorio)" className="input-transparent" />
                        </Col>

                        <Col className="s12 m6">
                            <InputText id="job" name="job" placeholder="Dedicación. Ej: Diseñador (obligatorio)" className="input-transparent" />
                        </Col>

                        <Col className="s12 m6">
                            <InputText id="email" name="email" placeholder="Correo electrónico (opcional)" className="input-transparent" />
                        </Col>

                        <Col className="s12 m6">
                            <InputText id="phone" name="phone" placeholder="Teléfono (opcional)" className="input-transparent" />
                        </Col>

                        <Col className="s12">
                            <InputTextArea id="quote" name="quote" placeholder="Cita u opinión sobre mí (obligatorio)" className="input-transparent" />
                        </Col>

                    </Row>
                </section>

            </ModalContent>

            <ModalFooter>

                <button className="btn red darken-4">
                    <i className="material-icons right">add</i>
                    Crear opinión
                </button>

            </ModalFooter>

        </Modal>

    );

}

export default { FormOpine };