import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Sidebar } from '../components';
import routes from '../router/routes';

const switchRoutes = (
  <Switch>
    {routes.map(({ redirect, path, component }, key) => {
      if (redirect)
        return <Redirect from="/" to="/user/5723502255" key={key} />;
      return <Route path={path} component={component} key={key}/>;
    })}
  </Switch>
);

export default () => (
  <div className="app-container">
    <Sidebar routes={routes}/>
    <div className="route-container">
      <div>
        {switchRoutes}
      </div>
    </div>
  </div>
);
