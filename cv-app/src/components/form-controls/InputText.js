/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './InputText.css';

/* Components */
import { getAttribute, joinAttribute } from '../../helpers/Attribute';

export function InputText(props) {

    return(
        <div className={ joinAttribute("input-text input-field", props.className) }>
            <input type="text" id={ getAttribute(props.id) } name={ getAttribute(props.name) } className="form-controls" placeholder={ getAttribute(props.placeholder) } />
        </div>
    );

}

export function InputTextArea(props) {

    return (
        <div className={ joinAttribute("input-text input-field", props.className) }>
            <textarea id={ getAttribute(props.id) } name={ getAttribute(props.name) } cols={ getAttribute(props.rows) } className="materialize-textarea" placeholder={ getAttribute(props.placeholder) }></textarea>
        </div>
    );

}

export default { InputText, InputTextArea };