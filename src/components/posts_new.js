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
                {field.meta.error}
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
                    label="Categories"
                    name="categories"
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
    Validation function structure. 
    It must an object (errors), and if it has any value, redux form will consider this form invalid.
    Note that is needed to use the same Field Name, found into our render/form component. 

*/
function validate(values) {
    const errors = {};

    // validate values
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }

    if (!values.content) {
        errors.content = "Enter some content!";
    }

    return errors;
}


/*
    reduxForm({...}) - it wires our component to the formReducer, configured 
    into our ../reducers/index.js
*/
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);