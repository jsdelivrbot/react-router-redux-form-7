import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
/*
  React Router - 
  Instalation 
    Terminal: $ npm install --save react-router-dom@4.0.0 (or a newer version)
*/
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
