import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'

class PostsShow extends Component {
    /**
     * This method is called when the page is rederized. 
     * Here the 'id', parameter into the URL, will be get and 
     * will be used to call our actionCreator fetchPost.
     */
    componentDidMount() {
        /**
         * This piece of code allows our code to access a specific
         * part of the URL. 
         * It is doing something like this.props.match.params.id. 
         * Take a look that 'id' is the same key defined at Route, 
         * at /src/index.js
         */
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }


    render () {
        const { post } = this.props;
        
        /**
         * It will avoid the error: 'post is undefined'
         * It happens because our action creator did not have time 
         * to return our post. 
         * So, we are showing Loading... for a while until post
         * has been loaded.
         */
        if (!post) {
            return (
                <div>Loading... </div>
            );
        }

        return (
            <div>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        )
    }    
}


function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost } )(PostsShow);