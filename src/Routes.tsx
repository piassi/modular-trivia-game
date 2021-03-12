import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { features } from './features';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {features.map((feature) => (
          <Route
            key={feature.namespace}
            exact
            path={feature.route.path}
            component={feature.route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
