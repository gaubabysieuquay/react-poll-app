import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, authUser, ...rest }) => {
  return authUser === true ? (
    <Redirect to="/login" />
  ) : (
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
};

export default ProtectedRoute;
