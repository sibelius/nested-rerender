import React from 'react';
import { Route } from 'react-router-dom';

export const drawRoutes = (
  routes,
  componentProps,
) => {
  return routes.map(route => {
    return (
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        render={props => {
          return (
            <route.component
            {...componentProps}
            {...props}
            routes={route.routes}
            modalRoutes={route.modalRoutes}
          />
            )
        }}
      />
    );
  });
};
