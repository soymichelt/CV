import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import PublicIcon from '@material-ui/icons/Public'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import SchoolIcon from '@material-ui/icons/School'

import ContentAcademicList from './ContentAcademicList'


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


const styles = {
    root: {
        flexGrow: 1,
    },
    tabsAppBar: {
        position: 'relative',
        zIndex: 900,
    },
};

class ContentTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { classes } = this.props;

        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar
                    className={classes.tabsAppBar}
                    color='default'
                >
                    <Tabs
                        value={this.state.value}
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
                {
                    value === 0 && <TabContainer>
                        <ContentAcademicList />
                    </TabContainer>
                }
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
            </div>
        );
    }
}

ContentTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentTabs);