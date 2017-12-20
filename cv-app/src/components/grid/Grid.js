/* Node & ReactJS Modules */
import React, { Component } from 'react';

function getClassName(className) {

    var classNameProps = '';
    if(className != null) {
        classNameProps = ' ' + className;
    }
    return classNameProps;

}

export function Container(props) {

    
    return(
        <section className={ 'container' + getClassName(props.className) }>
            {props.children}
        </section>
    );

}

export function ContainerFluid(props) {

    return(
        <section className={ 'container-fluid' + getClassName(props.className) }>
            {props.children}
        </section>
    );

}

export function Row(props) {

    return (
        <section className={'row' + getClassName(props.className)}>
            {props.children}
        </section>
    );

}

export function Col(props) {

    return (
        <section className={'col' + getClassName(props.className)}>
            {props.children}
        </section>
    );

}

export default { Container, ContainerFluid, Row, Col };