/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './FormContact.css';

/* Components */
import { ContainerFluid, Row, Col } from '../grid/Grid';
import { InputText, InputTextArea } from '../form-controls/InputText';
import { SelectDropDown } from '../form-controls/SelectDropDown';

export function FormContact(props) {

    return (
        <section className="form-contact-section">
            <Row>
                <Col className="s12">
                    <h5 className="blue-grey-text text-darken-4">
                        <i className="material-icons right blue-grey-text text-darken-4">contact_mail</i>
                        <span className="red-text text-darken-4">Bienvenido a mi sitio</span>, contáctame
                    </h5>
                </Col>
                <Col className="s12">
                    <InputText name="name" id="name" placeholder="Nombres y apellidos" />
                </Col>
                <Col className="s12 m6">
                    <InputText name="email" id="email" placeholder="Correo electrónico" />
                </Col>
                <Col className="s12 m6">
                    <InputText name="phone" id="phone" placeholder="Teléfono" />
                </Col>
                <Col className="s12">
                    <SelectDropDown>
                        <option>Seleccionar Categoria</option>
                        <option value="saludo">Saludo Amistoso</option>
                        <option value="comunicacion">Comunicación Profesional</option>
                        <option value="servicio">Solicitud de Servicio</option>
                        <option value="otro">Otro Asunto</option>
                    </SelectDropDown>
                </Col>
                <Col className="s12">
                    <InputTextArea name="message" id="message" placeholder="Escriba su mensaje" rows="5" />
                </Col>
                <Col className="s12">
                    <button className="btn red darken-4">
                        <i className="right material-icons">arrow_forward</i>
                        Enviar
                    </button>
                </Col>
            </Row>
        </section>
    );

}
export default FormContact;