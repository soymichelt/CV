/*
    Suscribe UI
*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/red'
import blueGrey from '@material-ui/core/colors/blueGrey'
import classnames from 'classnames'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import './Suscribe.css'

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '350px',
        backgroundColor: blueGrey[700],
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: 0,
        marginBottom: '16px',
        fontSize: '28px',
        fontWeight: 500,
        //fontFamily: '"Source Sans Pro", sans-serif',
        fontFamily: 'Roboto',
        color: blueGrey[900],
        zIndex: 1000,
        textAlign: 'center',
    },
    containerForm: {
        padding: '32px 16px',
        width: '100%',
        position: 'relative',
        zIndex: 1000,
        boxSizing: 'border-box',
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
        '&:focus': {
            borderColor: '#aaa',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    emailLabel: {
        fontSize: 18,
    },
    wrapperButton: {
        position: 'relative',
    },
    suscribeButton: {
        width: '100%',
        height: '41px',
        background: 'linear-gradient(to right, ' + lightBlue[800] + ', ' + lightBlue[600] +')',
        color: '#FFFFFF',
        borderBottom: '4px solid ' + lightBlue[900],
    },
    progress: {
        position: 'absolute',
        color: '#FFF',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    followMeCaption: {
        margin: 0,
        marginTop: '18px',
        fontSize: '16px',
        fontWeight: 500,
        //fontFamily: '"Source Sans Pro", sans-serif',
        fontFamily: 'Roboto',
        color: blueGrey[900],
        zIndex: 1000,
        textAlign: 'center',
        height: '32px',
        lineHeight: '32px!important',
        verticalAlign: 'middle',
    },
    dividerOr: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '18px',
        maxWidth: '320px',
    },
    divider: {
        flex: 1,
        height: 1,
        background: '#EFEFEF',
    },
    or: {
        width: '48px',
        textAlign: 'center',
    },
    socialAvatar: {
        width: '32px',
        height: '32px',
        marginLeft: '4px',
        lineHeight: '32px!important',
        verticalAlign: 'middle',
    },
});

let Suscribe = ({
    classes,
    onEmailChange,
    onEmailKeyDown,
    onSuscribeClick,
    email,
    state,
    emailInvalidateError,
    suscribeMessage
}) => {

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
                    xs={11}
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
                                xs={10}
                                sm={6}
                                lg={5}
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
                                        onChange={onEmailChange}
                                        value={email}
                                        onKeyDown={onEmailKeyDown}
                                        disabled={ state === 1 ? true : false }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid
                                className={classes.wrapperButton}
                                item
                                xs={5}
                                sm={4}
                                lg={3}
                            >
                                <Button
                                    variant="contained"
                                    className={ classes.suscribeButton }
                                    onClick={ onSuscribeClick }
                                    disabled={ state === 1 ? true : false }
                                >
                                    {state !== 1 ? 'Suscribirse' : 'Guardando...'}
                                </Button>
                                {
                                    state === 1 && <CircularProgress
                                        size={24}
                                        className={classes.progress}
                                    />
                                }
                            </Grid>
                        </Grid>
                        <div className={classes.dividerOr}>
                            <div className={classes.divider}></div>
                            <div className={classes.or}>o</div>
                            <div className={classes.divider}></div>
                        </div>
                        <h2
                            className={classes.followMeCaption}
                        >
                            Sigueme en 
                            <a
                                href='https://www.facebook.com/soymichelt'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    className={classes.socialAvatar}
                                    src={process.env.PUBLIC_URL + '/res/fb-64x64.png'}
                                    alt={'Facebook: Soymichelt'}
                                />
                            </a>
                            <a
                                href='https://twitter.com/soymichelt'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    className={classes.socialAvatar}
                                    src={process.env.PUBLIC_URL + '/res/tw-64x64.png'}
                                    alt={'Twitter: Soymichelt'}
                                />
                            </a>
                            <a
                                href='https://github.com/soymichelt'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    className={classes.socialAvatar}
                                    src={process.env.PUBLIC_URL + '/res/gb-black-64x64.png'}
                                    alt={'GitHub: Soymichelt'}
                                />
                            </a>
                        </h2>
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