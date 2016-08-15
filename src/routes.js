import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';
import Signin from './components/signin';
import Signup from './components/signup';
import RequireAuth from './components/require-auth';

export default(
	<div>
		<p>Hello</p>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="posts/new" component={RequireAuth(New)} />
			<Route path="posts/:id" component={Show} />
			<Route path="signin" component={Signin} />
			<Route path="signup" component={Signup} />
		</Route>
	</div>
);
