/* Node & ReactJS Modules */
import React, { Component } from 'react';

/* Components */
import { getAttribute } from '../../helpers/Attribute';

function getClassName(className) {

    var classNameProps = '';
    if(className != null) {
        classNameProps = ' ' + className;
    }
    return classNameProps;

}

export function Container(props) {

    
    return(
        <section className={ 'container' + getAttribute(props.className) }>
            {props.children}
        </section>
    );

}

export function ContainerFluid(props) {

    return(
        <section className={ 'container-fluid' + getAttribute(props.className) }>
            {props.children}
        </section>
    );

}

export function Row(props) {

    return (
        <section className={'row' + getAttribute(props.className)}>
            {props.children}
        </section>
    );

}

export function Col(props) {

    return (
        <section className={'col' + getAttribute(props.className)}>
            {props.children}
        </section>
    );

}

export default { Container, ContainerFluid, Row, Col };