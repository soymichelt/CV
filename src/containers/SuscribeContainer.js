/*
    Suscribe Container
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import Suscribe from './../components/theme/Suscribe'

class SuscribeContainer extends Component {

    render() {
        return(
            <Suscribe />
        );
    }

}

let selectorFormSuscribe = formValueSelector('suscribeForm');

const mapStateToProps = (newState, props) => {};

const mapDispatchToProps = (dispatch) => ({});

export default SuscribeContainer;