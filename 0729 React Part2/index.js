import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import UserList from './components/ulist/userList.js';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userListReducer from './components/ulist/reducers/userListReducer';

import App from './containers/app.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';


/*
render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
			<IndexRoute component={UserList} />
			<Route path="list" component={UserList} />
			<Route path="userlist" component={UserList} />
        </Route>
    </Router>)
    , document.getElementById('root')
);*/
const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  userListReducer,
  applyMiddleware(...middleware)
)


render(
	(<Provider store={store}>
       <UserList /> 
    </Provider>)
	, document.getElementById('root')

);


