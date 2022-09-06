import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./views/Main";
import Add from "./views/Add";
import Update from "./views/Update";
import NotFound from "./views/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/new">
            <Add />
          </Route>
          <Route exact path="/edit/:id">
            <Update />
          </Route>
          <Route exact path="/404">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
