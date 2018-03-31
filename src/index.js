import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
/*
  React Router
  Instalation 
    Terminal: $ npm install --save react-router-dom@4.0.0 (or a newer version)

  Switch 
    Determines that ONLY the first path that the URL Browser matches will be rendered. 
    Note that the path "/" was moved to end of the list.
    It solves the render problem that renderizes all components where its paths matches 
    the browser url. 
      The problem without Switch: 
        The URL browser http://localhost:8080/posts/new will render PostsIndex and PostsNew. 
        Because the / after 8080 will match the route path="/" and the /posts/new will match the
        router path="/posts/new". 
        With Switch, just the first route path matched will be rendered. This is why we need to
        change the more specific paths to be listed first. 

*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
