/*
    Datos personales
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'

import ContentPersonalProfileBiography from './ContentPersonalProfileBiography'
import ContentPersonalProfileGeneral from './ContentPersonalProfileGeneral'
import ContentPersonalProfileJobs from './ContentPersonalProfileJobs'

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        minHeight: 400,
    },
    container: {
        
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
});

class ContentPersonalProfile extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {

        const { classes } = this.props;

        return (
            <div
                className={
                    classNames(
                        'contentPersonalProfileSection',
                        classes.root,
                    )
                }
            >
                <Grid
                    className={classes.container}
                    container
                    spacing={32}
                    justify={'center'}
                >
                    <Grid
                        item
                        xs={11}
                        sm={6}
                    >
                        <ContentPersonalProfileBiography
                            biography={
                                <span>
                                    Nicaragüense nacido el 02 de septiembre de 1994. Egresado como ingeniero en sistemas de información por la UNAN, Managua. Me considero un entusiasta por la programación; fiel defensor del uso de TDD y patrones de diseño. Cada día trato de aprender algo nuevo. Otros hobbies son la lectura y escritura (en esto no me considero muy bueno). Trabajo para algún día llegar a ser un gran <b>{'<senior-programmer />'}</b>.
                                </span>
                            }
                            personalObjectives={'Crecer personal, académica y profesionalmente.'}
                        />
                    </Grid>
                </Grid>

                <Grid
                    className={classes.container}
                    container
                    spacing={32}
                    justify={'center'}
                >
                    <Grid
                        item
                        xs={11}
                        sm={6}
                    >
                        <ContentPersonalProfileGeneral
                        />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.container}
                    container
                    spacing={32}
                    justify={'center'}
                >
                    <Grid
                        item
                        xs={11}
                        sm={6}
                    >
                        <ContentPersonalProfileJobs />
                    </Grid>
                </Grid>
            </div>
        );
    }

    componentWillMount() {
    }

}

export default withStyles(styles)(ContentPersonalProfile);