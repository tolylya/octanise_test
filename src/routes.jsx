import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import Login from './pages/Login';
import Register from './pages/Register';
import InviteSupplier from './pages/InviteSupplier';
import CustomerRequests from './pages/CustomerRequests';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/invite-supplier" component={InviteSupplier} />
    <Route path="/customer/requests" component={CustomerRequests} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
