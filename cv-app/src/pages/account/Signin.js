/*
    Inicio de sesión
*/

import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

//import deepOrange from '@material-ui/core/colors/deepOrange'

import './Signin.css'

const styles = (theme) => ({
    signinPage: {
        height: window.innerHeight,
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
    marginTop: {
        marginTop: 32,
    },
    separator: {
        marginTop: 24,
    },
    signinButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    changePassword: {
        minHeight: 40,
    },
});

class Signin extends Component {

    constructor(props) {
        super(props);
        this.signinPage = React.createRef();
    }

    render() {

        const { classes } = this.props;

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
                    <img
                        className={classes.logo}
                        src={process.env.PUBLIC_URL + '/res/imagoTipo.png'}
                    />
                    <section
                        className={classes.marginTop}
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
                            <Input
                                className={'form-input'}
                                id="email"
                                startAdornment={
                                    <InputAdornment
                                        className={'form-input-adornment'}
                                        position={'start'}
                                    >
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                }
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
                            <Input
                                className={'form-input'}
                                id="password"
                                startAdornment={
                                    <InputAdornment
                                        className={'form-input-adornment'}
                                        position="start"
                                    >
                                        <LockIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <section
                            className={classes.separator}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.signinButton}
                            >
                                Entrar
                                <KeyboardArrowRightIcon className={classes.rightIcon} />
                            </Button>
                            <Button
                                className={classes.changePassword}
                                variant='text'
                            >
                                ¿Olvidó contraseña?
                            </Button>
                        </section>

                    </section>
                </Paper>
            </section>
        )
    }
}

export default withStyles(styles)(Signin);