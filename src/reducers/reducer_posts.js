import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            // This line bellow does the same thing as the four above.
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