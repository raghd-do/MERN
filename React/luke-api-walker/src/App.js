import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./Components/Form";
import PeopleData from "./Components/PeopleData";
import PlanetsData from "./Components/PlanetsData";
import StarshipsData from "./Components/StarshipsData";
import Error from "./Components/Error";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/people/:id">
            <PeopleData />
          </Route>
          <Route path="/planets/:id">
            <PlanetsData />
          </Route>
          <Route path="/starships/:id">
            <StarshipsData />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
