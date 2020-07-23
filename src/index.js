import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import indexRoutes from './router/indexRoutes';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      {indexRoutes.map(({ path, component }, key) => {
        return <Route path={path} component={component} key={key} />
      })}
    </Switch>
  </BrowserRouter>
)

const renderApp = () => (
  ReactDOM.render(<App />, document.getElementById('root'))
);

renderApp();
