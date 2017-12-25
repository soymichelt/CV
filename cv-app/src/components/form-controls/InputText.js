/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './InputText.css';

/* Components */
import { getAttribute } from '../../helpers/Attribute';

export function InputText(props) {

    return(
        <div className="input-text input-field">
            <input type="text" id={ getAttribute(props.id) } name={ getAttribute(props.name) } className="form-controls" placeholder={ getAttribute(props.placeholder) } />
        </div>
    );

}

export function InputTextArea(props) {

    return (
        <div className="input-text input-field">
            <textarea id={ getAttribute(props.id) } name={ getAttribute(props.name) } cols={ getAttribute(props.rows) } className="materialize-textarea" placeholder={ getAttribute(props.placeholder) }></textarea>
        </div>
    );

}

export default { InputText, InputTextArea };