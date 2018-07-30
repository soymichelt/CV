/*
    Contenedor del Timeline
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineList from './../components/timeline/TimelineList'

class TimelineContainer extends Component {

    constructor(props) {

        super(props);
        
    }

    render() {

        return (
            <TimelineList

            />
        );

    }

}

const mapStateToProps = (newState, props) => {
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);