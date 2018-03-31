import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
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