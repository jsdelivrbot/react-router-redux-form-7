import React, { Component } from 'react';
/*
    redux-form
        reduxForm 
            It is similar to a Connector, however it will help our component to connect directly 
            to the Redux Store, that means, to the reducer we have configured at ../reducers/index.js.
*/
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

    renderField(field) {
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render () {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={ this.renderField }
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={ this.renderField }
                />
                <Field
                    label="Post Cotent"
                    name="content"
                    component={ this.renderField }
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