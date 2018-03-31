import React, { Component } from 'react';
/*
    redux-form
        reduxForm 
            It is similar to a Connector, however it will help our component to connect directly 
            to the Redux Store, that means, to the reducer we have configured at ../reducers/index.js.
*/
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
    render () {
        return (
            <form>
                <Field
                    name="title"
                    // component={}
                />
            </form>
        );
    }
}


/*
    reduxForm({...}) - it wires our component to the formReducer, configured 
    into our ../reducers/index.js
*/
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);