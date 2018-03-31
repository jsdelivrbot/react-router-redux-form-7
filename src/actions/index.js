import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=RSMORE1984'

/**
 * >> fetchPosts
    (ActionCreator)
    This function will be used to Fetch the Posts at https://reduxblog.herokuapp.com/

    So, how we will have network requests here, so Axios will be need to handler this requests. 
    [https://github.com/axios/axios]
    
    The Redux Promise will also be needed to handle the asynchronous nature of the request it self.
    [https://www.npmjs.com/package/redux-promise]

    installation
        terminal: $ npm install --save axios redux-promise
 */
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

/**
 * createPost function
 * (Action Creator)
 * 
 * ActionCreator/Function used to perform posts from posts_new.js component to our backend 
 * (reduxblog.herokuapp) API.
 * 
 * @param {*} values 
 */
export function createPost(values) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
    
    return {
        type: CREATE_POST,
        payload: request
    };
}
    