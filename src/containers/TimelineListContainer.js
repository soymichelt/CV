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
    setNotfoundTimelineList,
    setErrorTimelineList,
    filterByCategory,
    openDialogSortBy,
    onClickSortItem,
} from './../state/actions/timelineListAction'

class TimelineContainer extends Component {



    render() {

        return (
            <TimelineList
                
            />
        );

    }

    componentDidMount() {

        this.getTimelineList();

    }

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

        });

    };

    upgradeTimeline = (timelineList) => {
        this.props.setTimelineList(timelineList);
    };

}

const mapStateToProps = (newState, props) => {

    var { timelineList } = newState;
    
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
        stateList: state,
        list,
        category,
        isOpenDialogOrderBy: isOpenDialogOrderBy ? isOpenDialogOrderBy : false,
        itemToSort,
    };

};

const mapDispatchToProps = dispatch => ({
    setLoadingTimelineList: () => dispatch(setLoadingTimelineList()),
    setTimelineList: (list) => dispatch(setTimelineList(list)),
    setNotfoundTimelineList: () => dispatch(setNotfoundTimelineList()),
    setErrorTimelineList: () => dispatch(setErrorTimelineList()),
    filterByCategory: (category) => dispatch(filterByCategory(category)),
    openDialogSortBy: (isOpen) => dispatch(openDialogSortBy(isOpen)),
    onClickSortItem: (itemToSort) => dispatch(onClickSortItem(itemToSort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);