import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/:id">
            <Detail />
          </Route>
          <Route exact path="/:id/edit">
            <Update />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
