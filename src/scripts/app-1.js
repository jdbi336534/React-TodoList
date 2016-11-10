'use strict';
import '../styles/usage/page/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// import router
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';

// router components
import App from './components/router/router-app.jsx';
import TV from './components/router/router-tv.jsx';
import Shows from './components/router/router-show.jsx';
import ShowIndex from './components/router/router-show-index.jsx';

let app = document.getElementById('app');

let handleEnter = () => {
  console.log('entered');
}

let handleLeave = () => {
  console.log('leaved');
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="tv" component={TV}>
        <IndexRoute component={ShowIndex}></IndexRoute>
        <Route path="/shows/:id" onEnter={handleEnter} onLeave={handleLeave} component={Shows} />
        <Redirect from="shows/:id" to="/shows/:id" />
      </Route>
    </Route>
  </Router>
), app);

if (module.hot) {
  module.hot.accept();
}
