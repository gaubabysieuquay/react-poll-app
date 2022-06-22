import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser === true ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
