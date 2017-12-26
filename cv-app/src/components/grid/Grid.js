/* Node & ReactJS Modules */
import React from 'react';

/* Components */
import { joinAttribute } from '../../helpers/Attribute';

export function Container(props) {

    
    return(
        <section className={ joinAttribute('container', props.className) }>
            { props.children }
        </section>
    );

}

export function ContainerFluid(props) {

    return(
        <section className={ joinAttribute('container-fluid', props.className) }>
            {props.children}
        </section>
    );

}

export function Row(props) {

    return (
        <section className={joinAttribute('row', props.className)}>
            {props.children}
        </section>
    );

}

export function Col(props) {

    return (
        <section className={joinAttribute('col', props.className)}>
            {props.children}
        </section>
    );

}

export default { Container, ContainerFluid, Row, Col };