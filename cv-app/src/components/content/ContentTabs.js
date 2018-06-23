import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import FaceIcon from '@material-ui/icons/Face'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'

import ContentAcademicList from './ContentAcademicList'


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const styles = {
    root: {
        flexGrow: 1,
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
                    position='static'
                    color='default'
                >
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        centered
                    >
                        <Tab label="Estudios" icon={ <PersonPinIcon /> } />
                        <Tab label="Portafolio" icon={ <FavoriteIcon /> } />
                        <Tab label="Información" icon={ <FaceIcon /> } />
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