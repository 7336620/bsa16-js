import React from 'react';
import { render } from 'react-dom';
import UserList from './components/ulist/userList.js';

import App from './containers/app.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import 'babel-polyfill'


render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
			<IndexRoute component={UserList} />
			<Route path="list" component={UserList} />
			<Route path="userlist" component={UserList} />
        </Route>
    </Router>)
    , document.getElementById('root')
);

/*
render(
	<UserList /> , 
	document.getElementById('root')

);
*/