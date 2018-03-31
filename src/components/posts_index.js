import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
    /*
        This function will be called by React Lifecicle function 
        It's called when React created the component 
        And it will be used to call our fetchPosts Action Creator

            The fetchPosts Action Creator has our post content organized by key.

    */
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts Index
            </div>

        );  

    }
}

// here we are wiring the featchPosts Action Creator to this component (PostsIndex it self)
export default connect( null, { fetchPosts } )(PostsIndex);