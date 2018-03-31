import { combineReducers } from 'redux';
/*
    Form Reducer: https://redux-form.com

    Used to create forms and its validations.

    Installation:
        npm install --save redux-form@6.6.3
*/
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,

  form: formReducer
  
});

export default rootReducer;
