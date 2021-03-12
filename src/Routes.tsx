import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { modules } from './modules';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {modules.map((module) => (
          <Route
            key={module.namespace}
            exact
            path={module.route.path}
            component={module.route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
