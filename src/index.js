import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes'
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

//import './style.scss';

// entry point that just renders app
// could be used for routing at some point
// at the top


// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


//replace your ReactDOM render with the following
// note this uses the Router stuff from last week
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </div>
  , document.getElementById('main'));
