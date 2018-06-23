/*
    Nuevo inicio de sesión
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Theme from './../../components/theme/Theme'
import ContentTabs from './../../components/content/ContentTabs'
import ContentProfile from './../../components/content/ContentProfile'

export default class Home extends Component {

    render() {
        return (
            <div>
                <Theme title={'Capacitaciones'}>

                    <ContentProfile />

                    <ContentTabs />

                    <Button type='submit' color='primary'>
                        Saludar
                    </Button>
                </Theme>
            </div>
        )
    }
}