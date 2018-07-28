/*
    Cambiar Contraseña
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import firebase from 'firebase'

import ForgivePasswordForm from './../components/forgivePassword/ForgivePasswordForm'

/*
    Actions
*/
import {
    
    forgivePasswordStarted,
    forgivePasswordFinalized,
    forgivePasswordError,

} from './../state/actions/forgivePasswordAction'

class ForgivePasswordContainer extends Component {

    constructor(props) {
        super(props);
        this.forgivePasswordPage = React.createRef();
    }

    isUserAuth = () => {

        return (this.props.userAccount !== undefined);

    };

    sendAuthDataToEmailOrPhone = () => {};

    handleClickForgivePassword = () => {
        
        this.props.forgivePasswordError('Acceso enviado correctamente', false);

    };

    render() {

        return (

            <ForgivePasswordForm
                isUserAuth={this.isUserAuth()}
                onClickAuth={this.handleClickForgivePassword}
            />

        );

    }

}

const selectorFormForgivePassword = formValueSelector('forgivePasswordForm');

const mapStateToProps = (newState, props) => {

    var { forgivePassword, userAccount } = newState;

    if(!forgivePassword) {
        forgivePassword = {
            isLoading: false,
            message: undefined,
            isError: undefined,
        };
    }

    let { email } = selectorFormForgivePassword(newState, 'estoEsUnaPrueba', 'password');

    return {
        isLoading: forgivePassword.isLoading ? forgivePassword.isLoading : false,
        message: forgivePassword.message,
        isError: forgivePassword.error,
        userAccount: userAccount,
        //email: email,
    };

};

const mapDispatchToProps = (dispatch) => ({

    forgivePasswordStarted: () => dispatch(forgivePasswordStarted()),
    forgivePasswordFinalized: () => dispatch(forgivePasswordFinalized()),
    forgivePasswordError: (message, isError) => dispatch(forgivePasswordError(message, isError)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ForgivePasswordContainer);