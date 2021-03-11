import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
