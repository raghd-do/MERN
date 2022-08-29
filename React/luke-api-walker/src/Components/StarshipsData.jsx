import React from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const StarshipsData = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const [show, setShow] = React.useState({
    name: "",
    length: "",
    passengers: "",
    consumables: "",
    starship_class: "",
  });

  React.useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => {
        console.log(res.code);
        setShow(res.data);
      })
      .catch((err) => history.push("/error"));
  }, [id]);

  return (
    <div className="card text-start p-5">
      <h1>{show.name}</h1>
      <p>
        <span className="h5">Length: </span> {show.length}
      </p>
      <p>
        <span className="h5">Passengers: </span> {show.passengers}
      </p>
      <p>
        <span className="h5">Consumables: </span> {show.consumables}
      </p>
      <p>
        <span className="h5">Starship Class: </span> {show.starship_class}
      </p>
    </div>
  );
};
export default StarshipsData;
