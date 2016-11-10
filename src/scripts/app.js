'use strict';
import '../styles/usage/page/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import MyButtonController from './flux/components/MyButtonController.jsx';

let app = document.getElementById('app');


ReactDOM.render(
<MyButtonController />
  , app);

if (module.hot) {
  module.hot.accept();
}
