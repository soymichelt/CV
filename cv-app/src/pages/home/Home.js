/*
    Nuevo inicio de sesión
*/

import React, { Component } from 'react'
import Theme from './../../components/theme/Theme'
import { withStyles } from '@material-ui/core/styles'
import ContentTabs from './../../components/content/ContentTabs'
import ContentProfile from './../../components/content/ContentProfile'

const styles = (theme) => ({
});

class Home extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Theme title={'Capacitaciones'}>

                    <ContentProfile />

                    <section
                        className={classes.tabSection}
                    >

                        <ContentTabs />

                    </section>

                </Theme>
            </div>
        )
    }
}

export default withStyles(styles)(Home);