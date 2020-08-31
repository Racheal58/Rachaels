import React from 'react';
import { Route, Switch } from 'react-router-dom';

// HOCs & wrappers
import ProtectedRoute from './HOCs/ProtectedRoute';
import GuestWrapper from './HOCs/GuestWrapper';

// pages
import Landing from './pages/Landing';
import NotFound from './pages/Errors/404';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
