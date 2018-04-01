import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';


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
export function createPost(values, callback) {
    /**
     * Callback navigation 
     * Here, we are calling a callback funtion, passed as a parameter to create post, after 
     * axios.post has been properly executed. 
     * We are doing it using a promise.
     * Take a look on /components/posts_new.js # onSubmit method.
     */
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());
    
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}
    