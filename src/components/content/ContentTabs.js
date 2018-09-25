import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Hidden from '@material-ui/core/Hidden'

import PublicIcon from '@material-ui/icons/Public'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import SchoolIcon from '@material-ui/icons/School'

import ContentAcademicList from './ContentAcademicList'
import ContentProjectsList from './ContentProjectsList'
import ContentPersonalProfile from './ContentPersonalProfile'

import { onChangeTabIndex } from './../../state/actions/contentTabsAction'
import './../theme/Sticky.css'

const containerStyles = {
    tabContainer: {
        height: '100%',
    },
};

function TabContainer({ children, classes }) {
    return (
        <div className={classes.tabContainer}>
            {children}
        </div>
    );
}

const TabContainerWithStyles = withStyles(containerStyles)(TabContainer);

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = {
    root: {
        flexGrow: 1,
    },
    tabsAppBar: {
        position: 'relative',
        zIndex: 900,
    },
    tabContentSection: {
        //minHeight: window.innerHeight,
    },
};

class ContentTabs extends React.Component {

    constructor(props) {
        
        super(props);

        this.contentTabsAppBar = React.createRef();

        this.tabContentSection = React.createRef();

    }

    handleChange = (event, value) => {
        this.props.onChangeTabIndex(value);
    };

    handleScroll = (event) => {
        
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let newScrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        
        var scrollTopAppBar = this.contentTabsAppBar.current;
        var tabContentSection = this.tabContentSection.current;
        
        if(newScrollTop >= 416) {
            scrollTopAppBar.classList.add('appBarSticky');
            tabContentSection.classList.add('contentAfterSticky');
        } else {
            scrollTopAppBar.classList.remove('appBarSticky');
            tabContentSection.classList.remove('contentAfterSticky');
        }

    };

    render() {

        const { classes, tabValue } = this.props;

        return (

            <div id={'scroll'} className={classes.root}>
                <section
                    ref={this.contentTabsAppBar}
                >
                    <AppBar
                        className={classes.tabsAppBar}
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
                                centered
                            >
                                <Tab label={'Estudios'} icon={ <SchoolIcon /> } />
                                <Tab label={'Portafolio'} icon={ <ImportantDevicesIcon /> } />
                                <Tab label={'Información'} icon={ <PublicIcon /> } />
                            </Tabs>
                        </Hidden>
                        <Hidden
                            only={['sm', 'md', 'lg', 'xl']}
                        >
                            <Tabs
                                value={tabValue}
                                onChange={this.handleChange}
                                indicatorColor='secondary'
                                textColor='secondary'
                                fullWidth
                            >
                                <Tab icon={ <SchoolIcon /> } />
                                <Tab icon={ <ImportantDevicesIcon /> } />
                                <Tab icon={ <PublicIcon /> } />
                            </Tabs>
                        </Hidden>
                    </AppBar>
                </section>

                <section
                    ref={this.tabContentSection}
                    className={classes.tabContentSection}
                >
                
                    {
                        tabValue === 0 && <TabContainerWithStyles>
                            <ContentAcademicList />
                        </TabContainerWithStyles>
                    }
                    {
                        tabValue === 1 && <TabContainerWithStyles>
                            <ContentProjectsList />
                        </TabContainerWithStyles>
                    }
                    {
                        tabValue === 2 && <TabContainerWithStyles>
                            <ContentPersonalProfile />
                        </TabContainerWithStyles>
                    }
                    
                </section>

            </div>

        );

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

}

ContentTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (newState, props) => {

    var { contentTabs } = newState;

    if(!contentTabs) {
        contentTabs = {
            tabValue: 0,
        };
    }

    const { tabValue } = contentTabs;

    return({
        tabValue: tabValue ? tabValue : 0,
    });

};

const mapDispatchToProps = (dispatch) => ({

    onChangeTabIndex: (value) => dispatch(onChangeTabIndex(value)),
    
});

const ContentTabsWithStyles = withStyles(styles, { withTheme: true })(ContentTabs);

export default connect(mapStateToProps, mapDispatchToProps)(ContentTabsWithStyles);