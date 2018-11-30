/*
    Contenedor del Timeline
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineList from './../components/timeline/TimelineList'
import firebase from 'firebase'
import 'firebase/firestore'

/*
    Accions
*/
import { 
    setLoadingTimelineList,
    setTimelineList,
    setErrorTimelineList,
    setPaginationTimelineList,
} from './../state/actions/timelineListAction'

class TimelineContainer extends Component {

    render() {

        const { list, stateList } = this.props;

        return (
            <TimelineList
                data={list}
                state={stateList}
            />
        );

    }

    componentDidMount() {

        this.getTimelineList();

    }

    goToHome = () => {
        this.props.setPaginationTimelineList(1);
    };

    goToForward = () => {
        this.props.setPaginationTimelineList(this.props.paginationIndex + 1);
    };

    goToBack = () => {
        if(this.props.paginationIndex > 1)
        {
            this.props.setPaginationTimelineList(this.props.paginationIndex - 1);
        }
    };

    getTimelineList = () => {

        this.props.setLoadingTimelineList();

        var db = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        db.settings(settings);

        var timelineList = [];

        var query = db.collection('timeline');

        query.onSnapshot((snapshot) => {

            this.props.setLoadingTimelineList();

            var counter = 0;

            snapshot.docChanges().forEach((change) => {

                const { doc } = change;

                timelineList[counter] = {
                    uid: doc.id,
                    avatarURL: doc.data().avatarURL,
                    photoURL: doc.data().photoURL,
                    photoDescription: doc.data().name,
                    cardTitle: doc.data().name,
                    cardSubtitle: doc.data().school,
                    cardFavs: doc.data().favsCount,
                    cardShares: doc.data().sharesCount,
                    cardDescription: doc.data().description,
                };

                counter++;

            });

            this.upgradeTimeline(timelineList);

        }, (error) => {

            this.props.setErrorTimelineList();
            
        });

    };

    upgradeTimeline = (timelineList) => {

        this.props.setTimelineList(timelineList);
        
    };

}

const mapStateToProps = (newState, props) => {

    let { timelineList } = newState;
    
    if(!timelineList) {
        timelineList = {
            state: 0,
            list: [],
            category: '0',
            isOpenDialogOrderBy: false,
            itemToSort: '0',
        };
    }
    
    const { state, list, category, isOpenDialogOrderBy, itemToSort } = timelineList;
    
    return {
        stateList: state ? state : 0,
        list,
        category,
        isOpenDialogOrderBy: isOpenDialogOrderBy ? isOpenDialogOrderBy : false,
        itemToSort,
    };

};

const mapDispatchToProps = (dispatch) => ({
    setLoadingTimelineList: () => dispatch(setLoadingTimelineList()),
    setTimelineList: (list) => dispatch(setTimelineList(list)),
    setErrorTimelineList: () => dispatch(setErrorTimelineList()),
    setPaginationTimelineList: (paginationIndex) => dispatch(setPaginationTimelineList(paginationIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);