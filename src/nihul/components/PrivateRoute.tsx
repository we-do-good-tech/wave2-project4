import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// destructure props to get authentication and select component to serve
const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  // ...rest - sends all props data that was not destructured
  ...rest
}: any) => <Route {...rest} component={() => (isAuthenticated ? <Component /> : <Redirect to="/" />)} />;

export default PrivateRoute;
