import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            // this line below removes the post id we have just deleted from the state
            // return a new state without that id.
            return _.omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            // This line below does the same thing as the four above.
            return { ...state, [action.payload.data.id] : action.payload.data }
        
        case FETCH_POSTS:
            // Adjusting the payload to load State with a better structure, 
            // where we will have 
            //    [
            //        postId: {post content}
            //    ]
            // we will be using LODASH to do that _ (the underscore)
            return _.mapKeys(action.payload.data, 'id');

        default: 
            return state;
    }
}