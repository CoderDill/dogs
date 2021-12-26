import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import NewColor from "./NewColor";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/colors">
          <h1>Welcome to the color factory</h1>
        </Route>
        <Route exact path="/colors/new">
          <NewColor />
        </Route>
        <Route exact path="/colors/:color"></Route>
        <Redirect to="/colors" />
      </Switch>
    </>
  );
}

export default Routes;
