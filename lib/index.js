import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home'

require('./Home/home.css');
require('./Countdown/countdown.css');

ReactDOM.render(
  <Home />, document.getElementById('app')
);
