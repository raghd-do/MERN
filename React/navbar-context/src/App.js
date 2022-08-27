import React from "react";
import { Context } from "./context";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

function App() {
  const [name, setName] = React.useState("");
  return (
    <div className="App">
      <Context.Provider value={{ name, setName }}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </Context.Provider>
    </div>
  );
}

export default App;
