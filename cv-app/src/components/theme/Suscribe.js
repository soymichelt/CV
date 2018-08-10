/*
    Suscribe UI
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import blueGrey from '@material-ui/core/colors/blueGrey'
import classnames from 'classnames'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

import './Suscribe.css'

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '350px',
        backgroundColor: lightBlue[900],
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: 0,
        marginBottom: '24px',
        fontSize: '28px',
        fontWieght: 600,
        fontFamily: '"Source Sans Pro", sans-serif',
        color: blueGrey[900],
        zIndex: 1000,
        textAlign: 'center',
    },
    containerForm: {
        padding: '32px 16px',
        width: '100%',
        position: 'relative',
        zIndex: 1000,
    },
    emailRoot: {
        width: '100%',
        height: '41px',
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    emailInput: {
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
        border: '1px solid #e7e7e7',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#aaa',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    emailLabel: {
        fontSize: 18,
    },
    suscribeButton: {
        width: '100%',
        height: '41px',
        background: 'linear-gradient(to right, ' + lightBlue[800] + ', ' + lightBlue[600] +')',
        color: '#FFFFFF',
    },
});

let Suscribe = ({ classes }) => {

    return (
        <section
            className={
                classnames(
                    classes.root,
                    'suscribe-root'
                )
            }
        >
            <Grid
                container
                justify={'center'}
            >
                <Grid
                    item
                    sm={8}
                    xs={10}
                >
                    <Paper
                        className={classes.containerForm}
                        elevation={1}
                    >
                        <h1
                            className={classes.title}
                        >
                            Suscríbete al boletín de noticias
                        </h1>
                        <Grid
                            container
                            spacing={16}
                            justify={'center'}
                        >
                            <Grid
                                item
                                xs={7}
                                sm={5}
                            >
                                <FormControl
                                    className={classes.emailRoot}
                                >
                                    <Input
                                        disableUnderline={true}
                                        classes={{
                                            input: classes.emailInput
                                        }}
                                        type={'email'}
                                        placeholder={'Tu dirección de correo electrónico'}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                sm={2}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.suscribeButton}
                                >
                                    Suscribirse
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    );

};

Suscribe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Suscribe);