/*
    Suscribe Container
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    onEmailChange,
    emailError,
    suscribe,
    initSuscribe,
} from './../state/actions/suscribeAction'

import Suscribe from './../components/theme/Suscribe'

class SuscribeContainer extends Component {

    handleEmailChange = (event) => {
        this.props.onEmailChange(event.target.value)
    };

    handleEmailKeyDown = (event) => {
        
        if(event.key === 'Enter') {
            this.suscribe()
        }

    };

    handleSuscribeClick = (event) => {
        this.suscribe()
    };

    suscribe = () => {
        const { email, suscribe } = this.props;
        if(email !== '') {
            suscribe(email)
        }
        else {
            console.log("No se puede guardar el email: {" + email + "}")
        }
    };

    render() {

        const {
            state,
            email
        } = this.props
        
        return(
            <Suscribe
                onEmailChange={this.handleEmailChange}
                onEmailKeyDown={this.handleEmailKeyDown}
                onSuscribeClick={this.handleSuscribeClick}
                state={state}
                email={email}
            />
        )

    }

}

const mapStateToProps = (newState, props) => {
    
    const { suscribe } = newState

    const {
        email,
        state,
        emailInvalidateError,
        suscribeMessage,
    } = suscribe

    return ({
        email,
        state: state ? state : 0,
        emailInvalidateError,
        suscribeMessage,
    })
    
}

const mapDispatchToProps = (dispatch) => ({

    onEmailChange:          (email)         =>  dispatch(onEmailChange(email)),
    emailError:             (errorMessage)  =>  dispatch(emailError(errorMessage)),
    suscribe:               (email)         =>  dispatch(suscribe(email)),
    initSuscribe:           ()              =>  dispatch(initSuscribe()),

})

export default connect(mapStateToProps, mapDispatchToProps)(SuscribeContainer)