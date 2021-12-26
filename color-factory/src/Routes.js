import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import NewColor from "./NewColor";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage"

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/colors">
          <ColorList />
        </Route>
        <Route exact path="/colors/new">
          <NewColor />
        </Route>
              <Route exact path="/colors/:color">
                  <ColorPage />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </>
  );
}

export default Routes;
