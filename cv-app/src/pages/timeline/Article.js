/*
    Pantalla de Timeline
*/

import React, { Component } from 'react'
import Theme from './../../components/theme/Theme'
import { withStyles } from '@material-ui/core/styles'
import ContentProfile from './../../components/content/ContentProfile'
import Profile from './../../components/content/Profile'
import ArticleDetailContainer from './../../containers/ArticleDetailContainer'

const styles = (theme) => ({
});

class Home extends Component {

    render() {

        const { classes } = this.props;

        return (
            <Theme
                headerBackground={'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))'}
            >

                <ContentProfile
                    background={'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))'}
                    imageUrl1={process.env.PUBLIC_URL + '/res/mlkit_back@2x.png'}
                >
                    <Profile />
                </ContentProfile>

                <ArticleDetailContainer 
                />

            </Theme>
        )
    }
}

export default withStyles(styles)(Home);