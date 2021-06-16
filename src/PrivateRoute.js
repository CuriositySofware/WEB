import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  component: Component,
  type,
  mustBeAdmin,
  redirectTo,
  isLoggedIn,
}) {
  if (
    (isLoggedIn && type === "admin" && mustBeAdmin) ||
    (isLoggedIn && !mustBeAdmin)
  ) {
    return <Route render={(props) => <Component {...props} />} />;
  }

  return (
    <Route
      render={(props) => (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { referer: props.location },
          }}
        />
      )}
    />
  );
}

export default PrivateRoute;