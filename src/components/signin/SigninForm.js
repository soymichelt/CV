/*
    Formulario de Inicio de Sesión
*/
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import blueGrey from '@material-ui/core/colors/blueGrey'

import './SigninForm.css'

import CustomInput from './../helpers/CustomInput'

const styles = (theme) => ({
    signinPage: {
        height: '100%!important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    signinContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: 345,
        minHeight: 345,
        padding: 24,
    },
    logo: {
        width: 216,
        height: 38,
    },
    separator: {
        marginTop: 24,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    signinButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundColor: '#d5d5d5',
        color: '#fff',
    },
    changePassword: {
        color: blueGrey[800],
        minHeight: 40,
    },
});

let SigninForm = ({ classes, isUserAuth, onClickAuth }) => {

    if(!isUserAuth) {

        return (

            <section
                className={
                    classnames(
                        'signin-page',
                        classes.signinPage,
                    )
                }
            >
                <Paper
                    className={classes.signinContainer}
                    elevation={1}
                >
                    <Link
                        to={'/'}
                    >
                        <img
                            className={classes.logo}
                            src={process.env.PUBLIC_URL + '/res/imagoTipo2.png'}
                            alt={'Logo'}
                        />
                    </Link>
                    <section
                        className={classes.separator}
                    >
                        
                        <FormControl
                            fullWidth
                        >
                            <InputLabel
                                className={'form-input-label'}
                                htmlFor={'email'}
                            >
                                E-mail o teléfono
                            </InputLabel>

                            <CustomInput
                                className={'form-input'}
                                type={'email'}
                                startAdornment={
                                    <InputAdornment
                                        className={'form-input-adornment'}
                                        position={'start'}
                                    >
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                }
                                shrink={'true'}
                            />

                        </FormControl>

                        <FormControl
                            className={classes.separator}
                            fullWidth
                        >
                            <InputLabel
                                className={'form-input-label'}
                                htmlFor="password"
                            >
                                Contraseña
                            </InputLabel>
                            <CustomInput
                                className={'form-input'}
                                type={'password'}
                                startAdornment={
                                    <InputAdornment
                                        className={'form-input-adornment'}
                                        position={'start'}
                                    >
                                        <LockIcon />
                                    </InputAdornment>
                                }
                                shrink={'true'}
                            />
                        </FormControl>

                        <section
                            className={
                                classnames(
                                    classes.separator,
                                    classes.buttonContainer,
                                )
                            }
                        >
                            <Button
                                variant="contained"
                                color="inherit"
                                className={classes.signinButton}
                                onClick={onClickAuth}
                            >
                                Entrar
                                <KeyboardArrowRightIcon className={classes.rightIcon} />
                            </Button>
                            <Button
                                className={classes.changePassword}
                                variant='text'
                                component={Link}
                                to={'/Account/ForgivePassword'}
                            >
                                ¿No puedes entrar?
                            </Button>
                        </section>

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

SigninForm.propTypes = {
    classes: PropTypes.object.isRequired,
    isUserAuth: PropTypes.bool.isRequired,
};

SigninForm = withStyles(styles)(SigninForm);

export default SigninForm;