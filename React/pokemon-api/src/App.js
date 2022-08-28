import React from "react";
import "./App.css";

function App() {
  const [pokeList, setPokeList] = React.useState([]);
  const [isClicked, setIsClicked] = React.useState(false);

  const fetchPokemons = () => {
    setIsClicked(true);
  };

  React.useEffect(() => {
    if (isClicked) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then((res) => res.json())
        .then((res) => setPokeList(res.results));
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={fetchPokemons}>
        Fetch Pokemon
      </button>
      <br />
      <ol className="card p-4 border-info mt-5">
        {pokeList.length > 0
          ? pokeList.map((pokemon, i) => (
              <li key={i} className="h6">
                {pokemon.name}
              </li>
            ))
          : null}
      </ol>
    </div>
  );
}

export default App;
