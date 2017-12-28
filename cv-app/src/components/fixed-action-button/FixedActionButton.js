/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './FixedActionButton.css';

export function FixedActionButton() {

    return(

        <section className="fixed-action-button-section fixed-action-btn">
            <a href="javascript:void(0);" className="btn-floating btn-large red darken-4">
                <i className="large material-icons">chat</i>
            </a>
        </section>

    );

}

export default FixedActionButton;