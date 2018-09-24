/*
    Contenedor del Timeline
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineList from './../components/timeline/TimelineList'
import 'firebase/firestore'

class TimelineContainer extends Component {

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