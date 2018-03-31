import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=RSMORE1984'

/*
    >> fetchPosts

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
    