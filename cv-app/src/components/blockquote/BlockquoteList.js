/* Node & ReactJS Modules */
import React from 'react';

/* CSS */
import './BlockquoteList.css';

export function BlockquoteList(props) {

    return(

        <section className="blockquote-list-section">
            <h5>
                <i className="material-icons right">assignment</i>
                <span className="red-text text-darken-4">Lo que las personas</span> dicen sobre mí
            </h5>
            <br />
            <section className="blockquote-items">
                <BlockquoteItem
                    key="1"
                    quote="Conocí al Michel Traña un día que visito la empresa en que laboro para brindarnos un servicio profesional y quedamos encantados con su forma de trabajar.
                    Destaco que él nos diseño nuestro sistema con el cual controlamos el negocio.
                    Además como persona es muy amable y honesto."
                    name="Ing. Michel Roberto Traña Tablada"
                    job="Responsable de Laboratorio Farem Chontales"
                    email="mtraatabladaa94@gmail.com"
                    phone="(+505) 8367 - 1719"
                />
            </section>
            <section className="blockquote-actions right">
                <button className="btn btn-flat grey lighten-4">
                    <span className="blue-grey-text text-darken-4">Todas</span>
                </button>
                <button className="btn red darken-4">Crear opinión</button>
            </section>
            <br />
            <br />
        </section>

    );

}

export function BlockquoteItem(props) {

    return(

        <section className="blockquote-item">
            <p className="quote">
                <i className="material-icons right blue-grey-text text-darken-4">format_quote</i>
                
            </p>
            <section className="source-section">
                <img className="photo left" src={ process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                <p className="source">
                    <span className="name">Ing. Michel Roberto Traña Tablada</span>
                    <span className="job blue-grey-text text-darken-2">Responsable de Laboratorio FAREM Chontales</span>
                    <span className="contact blue-grey-text text-darken-2">
                        <span className="email">mtraatabladaa94@gmail.com</span>
                    </span>
                    <span className="contact blue-grey-text text-darken-2">
                        <span className="phone">(+505) 8367 - 1719</span>
                    </span>
                </p>
            </section>
        </section>

    );

}

export default { BlockquoteList, BlockquoteItem };