import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { routes } from './routes';
import { drawRoutes } from './drawRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>{drawRoutes([routes])}</Switch>
    </BrowserRouter>
  );
};

export default App;
