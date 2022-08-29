import React from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const PlanetsData = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = React.useState({
    name: "",
    climate: "",
    terrain: "",
    surface_water: "",
    population: "",
  });

  React.useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => setShow(res.data))
      .catch((err) => history.push("/error"));
  }, [id]);

  return (
    <div className="card text-start p-5">
      <h1>{show.name}</h1>
      <p>
        <span className="h5">Climate: </span> {show.climate}
      </p>
      <p>
        <span className="h5">Terrain: </span> {show.terrain}
      </p>
      <p>
        <span className="h5">Surface Water: </span> {show.surface_water}
      </p>
      <p>
        <span className="h5">Population: </span> {show.population}
      </p>
    </div>
  );
};
export default PlanetsData;
