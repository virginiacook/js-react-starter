
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';

export default(
	<div>
		<p>Hello</p>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="posts/new" component={New} />
			<Route path="posts/:id" component={Show} />
		</Route>
	</div>
);
