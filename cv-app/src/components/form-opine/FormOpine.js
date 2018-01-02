/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './FormOpine.css';

/* Components */
import { Row, Col } from '../grid/Grid';
import { Modal, ModalTitle, ModalContent, ModalFooter } from '../modal/Modal';

/* Helpers */
import { getAttribute } from '../../helpers/Attribute';

export function FormOpine (props) {

    return(

        <Modal id={ getAttribute(props.id) }>
        
            <ModalContent>

                <ModalTitle title="Opina lo que piensas de mí"></ModalTitle>

            </ModalContent>

            <ModalFooter>

                <button className="btn red darken-4">
                    Crear opinión
                </button>

            </ModalFooter>

        </Modal>

    );

}

export default { FormOpine };