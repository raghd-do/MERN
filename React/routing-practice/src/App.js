import "./App.css";
import React from "react";
import { useParams } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = (props) => {
  return <h1>Welcome !!</h1>;
};

const NorW = (props) => {
  const { NorW } = useParams();
  if (isNaN(NorW)) {
    return <h1>the word is: {NorW}</h1>;
  } else {
    return <h1>The number is: {NorW}</h1>;
  }
};

const StyledWord = (props) => {
  const { word, color, bgColor } = useParams();
  return (
    <h1 style={{ color: `${color}`, backgroundColor: `${bgColor}` }}>
      the word is: {word}
    </h1>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:NorW">
          <NorW />
        </Route>
        <Route path="/:word/:color/:bgColor">
          <StyledWord />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
