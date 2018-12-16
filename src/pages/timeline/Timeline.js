/*
    Pantalla de Timeline
*/

import React, { Component } from 'react'
import Theme from './../../components/theme/Theme'
import Portroit from './../../components/timeline/TimelinePortroit'
import TimelineContainer from './../../containers/TimelineListContainer'

class Home extends Component {

    render() {

        return (
            <Theme
                headerBackground={'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))'}
                shadowScrollDisabled={true}
                appBarElevation={2}
            >

                <Portroit />

                <TimelineContainer />

            </Theme>
        )
    }
}

export default Home;