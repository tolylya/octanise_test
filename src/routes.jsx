import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import Login from './pages/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
