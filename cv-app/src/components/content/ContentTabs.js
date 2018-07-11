import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import red from '@material-ui/core/colors/red'

import PublicIcon from '@material-ui/icons/Public'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import SchoolIcon from '@material-ui/icons/School'
import AddComment from '@material-ui/icons/Chat'

import ContentAcademicList from './ContentAcademicList'
import ContentProjectsList from './ContentProjectsList'
import ContentPersonalProfile from './ContentPersonalProfile'
import TabFabs from './../theme/TabFabs'

import { onChangeTabIndex } from './../../state/actions/contentTabsAction'

function TabContainer(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    tabsAppBar: {
        position: 'relative',
        zIndex: 900,
    },
    tabContentSection: {
    },
});

class ContentTabs extends React.Component {

    handleChange = (event, value) => {
        this.props.onChangeTabIndex(value);
    };

    render() {

        const { classes, theme, tabValue } = this.props;

        return (

            <div className={classes.root}>
                <AppBar
                    className={classes.tabsAppBar}
                    color={'default'}
                >
                    <Tabs
                        value={tabValue}
                        onChange={this.handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        centered
                    >
                        <Tab label="Estudios" icon={ <SchoolIcon /> } />
                        <Tab label="Portafolio" icon={ <ImportantDevicesIcon /> } />
                        <Tab label="Información" icon={ <PublicIcon /> } />
                    </Tabs>
                </AppBar>

                <section
                    className={classes.tabContentSection}
                >
                
                    {
                        tabValue === 0 && <TabContainer>
                            <ContentAcademicList />
                        </TabContainer>
                    }
                    {
                        tabValue === 1 && <TabContainer>
                            <ContentProjectsList />
                        </TabContainer>
                    }
                    {
                        tabValue === 2 && <TabContainer>
                            <ContentPersonalProfile />
                        </TabContainer>
                    }

                    <TabFabs
                        selected={tabValue}
                        list={
                            [
                                {
                                    key: 0,
                                    icon: <AddComment />,
                                    styles: {
                                        backgroundColor: red[500],
                                        color: '#FFF',
                                    },
                                },
                                {
                                    key: 1,
                                    icon: <AddComment />,
                                    styles: {
                                        backgroundColor: red[500],
                                        color: '#FFF',
                                    },
                                },
                                {
                                    key: 2,
                                    icon: <AddComment />,
                                    styles: {
                                        backgroundColor: red[500],
                                        color: '#FFF',
                                    },
                                },
                            ]
                        }
                    />
                </section>

            </div>

        );

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