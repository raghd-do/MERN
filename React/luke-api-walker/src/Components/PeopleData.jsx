import React from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

const PeopleData = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = React.useState({
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    homeworld: "",
  });
  const [homeworld, setHomeworld] = React.useState({
    id: "",
    name: "",
  });

  // To extract the home world id from its url
  const getID = (str) => {
    let arr = str.split("");
    let id = arr.filter((c) => !isNaN(c));
    return id.join("");
  };

  React.useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setShow(res.data);
        axios.get(res.data.homeworld).then((res) => {
          setHomeworld({ name: res.data.name, id: getID(res.data.url) });
        });
      })
      .catch((err) => history.push("/error"));
  }, [id]);

  return (
    <div className="card text-start p-5">
      <h1>{show.name}</h1>
      <p>
        <span className="h5">Height: </span> {show.height} cm
      </p>
      <p>
        <span className="h5">Mass: </span> {show.mass} kg
      </p>
      <p>
        <span className="h5">Hair Color: </span> {show.hair_color}
      </p>
      <p>
        <span className="h5">Skin Color: </span> {show.skin_color}
      </p>
      <hr />
      <p>
        <span className="h5">Home World: </span> {homeworld.name}
        <br />
        Go to <Link to={`/planets/${homeworld.id}`}>Home World</Link>
      </p>
    </div>
  );
};
export default PeopleData;
