import React from 'react'
import classnames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

const styles = {
    container: {
        background: 'linear-gradient(to right, rgb(106, 27, 154), rgb(142, 36, 170))',
    },
    portroit: {
        minHeight: '256px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        objectFit: 'cover',
    },
    hero: {
        position: 'absolute',
    },
    background: {
        objectFit: 'cover',
        zIndex: 1,
        top: '62px',
        right: 0,
        bottom: 0,
        height: '256px',
        width: '748px',
    },
    portroitInfo:{
        maxWidth: '620px',
        marginLeft: '12px',
    },
    portroitText: {
        color: 'rgba(255, 255, 255, .8)',
    },
    portroitTitle: {
        marginTop: 0,
        marginBottom: '8px',
        fontSize: '24px',
    },
    portroitCaption: {
        margin: 0,
        fontSize: '17px',
    },
    social: {
        marginTop: 10,
    },
    appBar: {
        position: 'relative',
        zIndex: 900,
    },
    iconTab: {
        verticalAlign: 'middle',
    },
};

const TimelinePortroit = ({ classes }) => {
    return (
        <section className={classes.container}>
            <section
                className={classes.portroit}
            >
                <img
                    className={
                        classnames(
                            classes.background,
                            classes.hero
                        )
                    }
                    src={
                        process.env.PUBLIC_URL + '/res/hero-timeline.png'
                    }
                    alt={'Hero'}
                />
                <section
                    className={classes.portroitInfo}
                >
                    <h1 className={classnames(classes.portroitTitle, classes.portroitText)}>
                        Blog Personal
                    </h1>
                    <p className={classnames(classes.portroitCaption, classes.portroitText)}>
                        En este sitio encontrarás publicaciones acerca de desarrollo 
                        de aplicaciones móviles y web; así como otros procesos 
                        del desarrollo de software. Todo el contenido proveido 
                        es la opinión personal del autor.
                    </p>
                    <section className={classes.social}>
                        <a
                            href='https://www.facebook.com/soymichelt'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                style={{mrginRight: '5px'}}
                                src={process.env.PUBLIC_URL + '/res/fb.png'}
                                srcSet={process.env.PUBLIC_URL + '/res/fb-64x64.png 2x'}
                                alt={'Facebook: Soymichelt'}
                            />
                        </a>
                        <a
                            style={{mrginRight: '5px'}}
                            href='https://twitter.com/soymichelt'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/res/tw.png'}
                                srcSet={process.env.PUBLIC_URL + '/res/tw-64x64.png 2x'}
                                alt={'Twitter: Soymichelt'}
                            />
                        </a>
                        <a
                            href='https://github.com/soymichelt'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/res/gb.png'}
                                srcSet={process.env.PUBLIC_URL + '/res/gb-64x64.png 2x'}
                                alt={'GitHub: Soymichelt'}
                            />
                        </a>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default withStyles(styles)(TimelinePortroit);

/*
<AppBar
    className={classes.appBar}
    elevation={1}
    color={'default'}
>
    <Hidden
        only={'xs'}
    >
        <Tabs
            value={tabValue}
            onChange={this.handleChange}
            indicatorColor='secondary'
            textColor='secondary'
        >
            <Tab
                label={
                    <Fragment>
                        <SchoolIcon className={classes.iconTab} />
                        <span>&nbsp;Blog</span>
                    </Fragment>
                }
            />
            <Tab
                label={
                    <Fragment>
                        <ImportantDevicesIcon className={classes.iconTab} />
                        <span>&nbsp;Categorias</span>
                    </Fragment>
                }
            />
        </Tabs>
    </Hidden>
</AppBar>
*/