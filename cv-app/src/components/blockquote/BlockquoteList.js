/* Node & ReactJS Modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import './BlockquoteList.css';

export function BlockquoteList(props) {

    return(

        <section className="blockquote-list-section">
            <h5>
                <i className="material-icons right blue-grey-text text-darken-4">assignment</i>
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
                <hr className="blue-grey lighten-5" />
                <BlockquoteItem
                    key="2"
                    quote="Conocí al Michel Traña un día que visito la empresa en que laboro para brindarnos un servicio profesional y quedamos encantados con su forma de trabajar.
                    Destaco que él nos diseño nuestro sistema con el cual controlamos el negocio.
                    Además como persona es muy amable y honesto."
                    name="Ing. Michel Roberto Traña Tablada"
                    job="Responsable de Laboratorio Farem Chontales"
                    email="mtraatabladaa94@gmail.com"
                    phone="(+505) 8367 - 1719"
                />
                <hr className="blue-grey lighten-5" />
                <BlockquoteItem
                    key="3"
                    quote="Conocí al Michel Traña un día que visito la empresa en que laboro para brindarnos un servicio profesional y quedamos encantados con su forma de trabajar.
                    Destaco que él nos diseño nuestro sistema con el cual controlamos el negocio.
                    Además como persona es muy amable y honesto."
                    name="Ing. Michel Roberto Traña Tablada"
                    job="Responsable de Laboratorio Farem Chontales"
                    email="mtraatabladaa94@gmail.com"
                    phone="(+505) 8367 - 1719"
                />
            </section>
            <section className="blockquote-actions">
                <button className="btn red darken-4">
                    Opinar
                    <i className="material-icons right">add</i>
                </button>
                <Link to="/Home/Quotes" className="btn btn-flat grey lighten-4">
                    <span className="blue-grey-text text-darken-4">Todas</span>
                    <i className="material-icons right">list</i>
                </Link>
            </section>
        </section>

    );

}

export function BlockquoteItem(props) {

    return(

        <article className="blockquote-item">
            <p className="quote">
                <i className="material-icons right blue-grey-text text-darken-2">format_quote</i>
                {props.quote}
            </p>
            <section className="source-section">
                <img className="photo left" src={ process.env.PUBLIC_URL + '/Resources/Images/Profile64x64.png'} />
                <p className="source">
                    <span className="name">{props.name}</span>
                    <span className="job blue-grey-text text-darken-2">{props.job}</span>
                    <span className="contact blue-grey-text text-darken-2">
                        <span className="email">{props.email}</span>
                    </span>
                    <span className="contact blue-grey-text text-darken-2">
                        <span className="phone">{ props.phone }</span>
                    </span>
                </p>
            </section>
        </article>

    );

}

export default { BlockquoteList, BlockquoteItem };