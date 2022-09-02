import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./views/Detail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
