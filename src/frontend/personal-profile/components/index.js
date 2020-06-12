import React from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

import { personalProfileStyles } from './index.styles';

import { Biography } from './biography';
import { GeneralInfo } from './general-info';
import { Jobs } from './jobs';

export const PersonalProfile = ({ }) => {

    const classes = personalProfileStyles();

    return (
        <div
            className={
                classNames(
                    classes.personalProfileSection,
                    classes.root,
                )
            }
        >
            <Grid className={classes.container} container justify={'center'}>
                <Grid item xs={11} sm={6}>
                    <Grid container spacing={2} justify='center'>
                        <Grid item xs={12}>
                            <Biography />
                        </Grid>
                        <Grid item xs={12}>
                            <GeneralInfo />
                        </Grid>
                        <Grid item xs={12}>
                            <Jobs />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};