/*
    Formulario de Cambiar Contraseña
*/
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import WrappedComponent from '../theme/WrappedComponent'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import blueGrey from '@material-ui/core/colors/blueGrey'
import Typography from '@material-ui/core/Chip'

import './../signin/SigninForm.css'

import CustomInput from '../helpers/CustomInput'

const styles = (theme) => ({
    changePasswordPage: {
        height: window.innerHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    changePasswordContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: 345,
        minHeight: 277,
        padding: 24,
    },
    formContainer: {
        width: '100%',
    },
    logo: {
        width: 216,
        height: 38,
    },
    separator: {
        marginTop: 24,
    },
    sendPasswordButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    signinButton: {
        color: blueGrey[800],
        minHeight: 40,
    },
    messageSection: {
        textAlign: 'center',
    },
    message: {
        color: blueGrey[800],
    },
});

let ForgivePasswordForm = ({ classes, isUserAuth, onClickAuth, message, isError }) => {

    if(!isUserAuth) {

        return (

            <section
                className={
                    classnames(
                        'signin-page',
                        classes.changePasswordPage,
                    )
                }
            >
                <Paper
                    className={classes.changePasswordContainer}
                    elevation={1}
                >
                    <Link
                        to={'/'}
                    >
                        <img
                            className={classes.logo}
                            src={process.env.PUBLIC_URL + '/res/imagoTipo2.png'}
                        />
                    </Link>
                    <section
                        className={
                            classnames(
                                classes.separator,
                                classes.formContainer,
                            )
                        }
                    >
                        
                        <FormControl
                            fullWidth
                        >
                            <InputLabel
                                className={'form-input-label'}
                                htmlFor={'email'}
                            >
                                Correo electrónico
                            </InputLabel>

                            <Field
                                className={'form-input'}
                                type={'email'}
                                id={'email'}
                                name={'estoEsUnaPrueba'}
                                startAdornment={
                                    <InputAdornment
                                        className={'form-input-adornment'}
                                        position={'start'}
                                    >
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                }
                                component={CustomInput}
                                shrink={'true'}
                            />

                        </FormControl>

                        <section
                            className={classes.separator}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.sendPasswordButton}
                                onClick={onClickAuth}
                            >
                                Enviar Acceso
                                <KeyboardArrowRightIcon className={classes.rightIcon} />
                            </Button>
                            <Button
                                className={classes.signinButton}
                                variant='text'
                                component={Link}
                                to={'/Account/Signin'}
                            >
                                Iniciar Sesión
                            </Button>
                        </section>

                        {message &&

                            <section
                                className={
                                    classnames(
                                        classes.separator,
                                        classes.messageSection,
                                    )
                                }
                            >
                                <Typography
                                    className={classes.message}
                                    label={message}
                                />
                            </section>

                        }

                    </section>
                </Paper>
            </section>

        );
    }
    else {
        return (
            <Redirect
                to={'/'}
            />
        );
    }

};

ForgivePasswordForm.propTypes = {
    classes: PropTypes.object.isRequired,
    isUserAuth: PropTypes.bool.isRequired,
    onClickAuth: PropTypes.func.isRequired,
    message: PropTypes.string,
    isError: PropTypes.bool,
};

ForgivePasswordForm = WrappedComponent(reduxForm({ form: 'forgivePasswordForm' })(ForgivePasswordForm));

ForgivePasswordForm = withStyles(styles)(ForgivePasswordForm);

export default ForgivePasswordForm;