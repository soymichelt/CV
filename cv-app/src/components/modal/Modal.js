/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* CSS */
import './Modal.css';

/* Components */
import { Row, Col } from '../grid/Grid';
import $  from 'jquery';

export function Modal(props) {

    return(

        <section className="modal modal-fixed-footer">
            { props.children }
        </section>

    );

}

export function ModalContent(props) {

    return(

        <section className="modal-content">
            { props.children }
        </section>
    );

}

export function ModalFooter(props) {

    return(

        <section className="modal-footer">
            { props.children }
        </section>
    );
}

$(document).ready(function() {
    $(".modal").modal();
});

export default { Modal, ModalContent, ModalFooter };