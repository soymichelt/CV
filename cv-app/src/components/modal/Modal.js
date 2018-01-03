/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './Modal.css';

/* Components */
import $  from 'jquery';

/* Helpers */
import { getAttribute } from '../../helpers/Attribute';

export function Modal(props) {

    return(

        <section id={ getAttribute(props.id) } className="modal-section modal modal-fixed-footer">
            { props.children }
        </section>

    );

}

export function ModalTitle(props) {

    return(

        <section className="modal-title red darken-4">
            <h1 className="title white-text">
                <i className="material-icons left">stars</i>
                <i className="material-icons right modal-close red darken-4 red-text text-lighten-3">close</i>
                { getAttribute(props.title) }
            </h1>
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