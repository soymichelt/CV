/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './FixedActionButton.css';

export function FixedActionButton() {

    return(

        <section class="fixed-action-button-section fixed-action-btn">
            <a href="javascript:void(0);" class="btn-floating btn-large red darken-4">
                <i class="large material-icons">supervisor_account</i>
            </a>
            <ul>
                <li>
                    <a class="btn-floating green">
                        <i class="material-icons">publish</i>
                    </a>
                </li>
                <li>
                    <a class="btn-floating blue" href="">
                        <i class="material-icons">textsms</i>
                    </a>
                </li>
            </ul>
        </section>

    );

}

export default FixedActionButton;