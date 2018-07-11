/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './SelectDropDown.css';

export function SelectDropDown(props) {

    return (

        <section className="input-select input-field">
            <select className="material-select">
                { props.children }
            </select>
        </section>
        
    );

}

export default SelectDropDown;