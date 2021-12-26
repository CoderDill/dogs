import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import NewColor from "./NewColor";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage"
import { useState } from "react";

function Routes() {
  const initialState = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };

  const [colors ,setColors] = useState(initialState)
  return (
    <>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors}/>
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
