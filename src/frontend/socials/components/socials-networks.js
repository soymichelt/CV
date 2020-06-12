import React from 'react';
import { socialsNetworksStyles } from './socials-networks.styles';
import Fb from './../../../assets/res/fb.png';
import Fb2x from './../../../assets/res/fb-64x64.png';
import Tw from './../../../assets/res/tw.png';
import Tw2x from './../../../assets/res/tw-64x64.png';
import Gb from './../../../assets/res/gb.png';
import Gb2x from './../../../assets/res/gb-64x64.png';
import { Grid, Paper, Button } from '@material-ui/core';

export const SocialsNetworks = () => {

    const classes = socialsNetworksStyles();

    return (
        <section className={classes.root}>
            <Grid container justify={'center'}>
                <Grid item sm={8} xs={11}>
                    <Paper className={classes.containerForm} elevation={1}>
                        <h1 className={classes.title}>
                            ¿Alguna duda? Contáctame
                        </h1>
                        <Grid container justify={'center'}>
                            <Grid className={classes.wrapperButton} item xs={5} sm={4} lg={3}>
                                <a className={classes.phoneLink} href='https://wa.me/50583671719' target='_blank' rel='noopener noreferrer'>
                                    <Button variant="contained" className={classes.suscribeButton}>
                                        (+505) 8367 - 1719
                                    </Button>
                                </a>
                            </Grid>
                        </Grid>
                        <div className={classes.dividerOr}>
                            <div className={classes.divider}></div>
                            <div className={classes.or}>o</div>
                            <div className={classes.divider}></div>
                        </div>
                        <h2 className={classes.followMeCaption}>
                            Sigueme en 
                            <a href='https://www.facebook.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                                <img className={classes.avatar} src={Fb} srcSet={`${Fb2x} 2x`} alt={'Facebook: Soymichelt'} />
                            </a>
                            <a href='https://twitter.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                                <img className={classes.avatar} src={Tw} srcSet={`${Tw2x} 2x`} alt={'Twitter: Soymichelt'} />
                            </a>
                            <a href='https://github.com/soymichelt' target='_blank' rel='noopener noreferrer'>
                                <img className={classes.avatar} src={Gb} srcSet={`${Gb2x} 2x`} alt={'GitHub: Soymichelt'} />
                            </a>
                        </h2>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    );
};