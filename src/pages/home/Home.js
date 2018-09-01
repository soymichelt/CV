/*
    Pantalla de Inicio
*/

import React, { Component } from 'react'
import Theme from './../../components/theme/Theme'
import { withStyles } from '@material-ui/core/styles'
import ContentTabs from './../../components/content/ContentTabs'
import ContentProfile from './../../components/content/ContentProfile'
import Profile from './../../components/content/Profile'

const styles = (theme) => ({
});

class Home extends Component {

    render() {

        const { classes } = this.props;

        return (
            <Theme>

                <ContentProfile>
                    <Profile />
                </ContentProfile>

                <section
                    className={classes.tabSection}
                >

                    <ContentTabs />

                </section>

            </Theme>
        )
    }
}

export default withStyles(styles)(Home);