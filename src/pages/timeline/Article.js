/*
    Pantalla de Timeline
*/

import React, { Component } from 'react'
import Theme from './../../components/theme/Theme'
import ContentProfile from './../../components/content/ContentProfile'
import ArticleDetailContainer from './../../containers/ArticleDetailContainer'

class Article extends Component {

    render() {

        return (
            <Theme
                headerBackground={'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))'}
            >

                <ContentProfile
                    background={'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))'}
                    imageUrl1={process.env.PUBLIC_URL + '/res/mlkit_back@2x.png'}
                >
                </ContentProfile>

                <ArticleDetailContainer 
                />

            </Theme>
        )
    }
}

export default Article;