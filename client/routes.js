import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Greetings from './components/Greetings.js';

import SignupPage from './components/signup/SingupPage';
import App from './components/App';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings}/>
    <Route path='signup' component={SignupPage}/>
  </Route>
)