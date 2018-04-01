import _ from 'lodash';
import React, { Component } from 'react';
// connect - Used to wire Action Creators to the component.
import { connect } from 'react-redux';
// Link -   Component used to navegate between components through react-router-dom       
//          it generates an anchor tag into the html dom.
import { Link } from 'react-router-dom';

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

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id} >
                    {post.title}
                </li> 
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>

                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );  
    }
}

// Make sure that the list of posts get inside the component
// We do that creating a new kind of data into the Component State
function mapStateToProps(state) {
    return { posts: state.posts };
}

// here we are wiring the featchPosts Action Creator to this component (PostsIndex it self)
// and using our mapStateToProps to add the posts data to the Component State.
export default connect( 
    mapStateToProps, 
    { 
        fetchPosts 
    }
)(PostsIndex);