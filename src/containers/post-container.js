import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './../components/post-study/post'
import { getPostById, } from './../state/actions/post-action'

class PostContainer extends Component {

    render() {

        const {
            state,
            data,
            open,
            onClose,
        } = this.props

        return (
            <Post
                state={state}
                data={data}
                open={open}
                onClose={onClose}
            />
        )

    }

    componentDidMount() {

        const { postId } = this.props

        if(postId) {
            this.props.getPostById(postId)
        }

    }

}

const mapStateToProps = (newState) => {

    let { post } = newState;

    if(!post) {
        post = {
            state: 0,
        };
    }
    
    const { state, data, } = post;
    
    return {
        state,
        data,
    };

};

const mapDispatchToProps = (dispatch) => ({

    getPostById:    (postId)    =>  dispatch(getPostById(postId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);