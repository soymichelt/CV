/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './FixedActionButton.css';

export function FixedActionButton() {

    return(

        <section className="fixed-action-button-section fixed-action-btn">
            <a href="javascript:void(0);" className="btn-floating btn-large red darken-4">
                <i className="large material-icons">group</i>
            </a>
            <ul>
                <li>
                    <a className="btn-floating green">
                        <i className="material-icons">publish</i>
                    </a>
                </li>
                <li>
                    <a className="btn-floating blue" href="">
                        <i className="material-icons">textsms</i>
                    </a>
                </li>
            </ul>
        </section>

    );

}

export default FixedActionButton;