/*
    Foto de Portada
*/
import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '100%',
        maxHeight: 416,
        objectFit: 'cover',
        position: 'relative',
    },
    container: {
        textAlign: 'center',
        height: 416,
        //marginTop: -420,
        color: '#FFF',
    },
    backgroundImage: {
        position: 'absolute',
        objectFit: 'cover',
        zIndex: 1,
    },
    background1: {
        left: 0,
        right: 0,
        minHeight: 416,
        width: '100%',
    },
    background2: {
        top: -8,
        right: '-5%',
        minHeight: 400,
        height: 400,
    },
})

export class ContentProfile extends Component {

    static propTypes = {

        classes: PropTypes.object.isRequired,

        children: PropTypes.node.isRequired,
        
        background: PropTypes.string,

        imageUrl1: PropTypes.string,

        imageUrl2: PropTypes.string,

    }

    render() {

        const { classes, children, background, imageUrl1, imageUrl2 } = this.props;

        return (
            <section
                className={classes.root}
                style={
                    background ?
                    {
                        background
                    }
                    :
                    {
                        background: 'linear-gradient(to right, rgb(239, 108, 0), rgb(251, 140, 0))',
                    }
                }
            >
                <section className={classes.container}>
        
                    <img
                        className={
                            classnames(
                                classes.backgroundImage,
                                classes.background1
                            )
                        }
                        src={
                            imageUrl1 ? imageUrl1
                            :
                            process.env.PUBLIC_URL + '/res/firestore_back@2x.png'
                        }
                        alt={'Fondo 1'}
                    />

                    <img
                        className={
                            classnames(
                                classes.backgroundImage,
                                classes.background2,
                            )
                        }
                        src={
                            imageUrl2 ? imageUrl2
                            :
                            process.env.PUBLIC_URL + '/res/firestore_mid@2x.png'
                        }
                        alt={'Fondo 2'}
                    />

                    {children}

                </section>

            </section>

        );

    }
    
}


export default withStyles(styles)(ContentProfile);