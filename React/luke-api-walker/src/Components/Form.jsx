import React from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
  const history = useHistory();
  const [data, setData] = React.useState({
    type: "people",
    id: "",
  });

  const searchValues = (e) => {
    e.preventDefault();

    if (data.id.length === 0) {
      history.push("/error");
    } else if (data.type === "people") {
      history.push(`/people/${data.id}`);
    } else if (data.type === "planets") {
      history.push(`/planets/${data.id}`);
    } else {
      // starships
      history.push(`/starships/${data.id}`);
    }
  };

  return (
    <>
      <form onSubmit={searchValues}>
        <div className="d-flex gap-3">
          <label className="col-1 form-label">Search for: </label>
          <select
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="col form-select bg-light border-0"
          >
            <option value="people">people</option>
            <option value="planets">planets</option>
            <option value="starships">starships</option>
          </select>
          <label className="col-1 form-label">ID: </label>
          <input
            type="number"
            min="1"
            onChange={(e) => setData({ ...data, id: e.target.value })}
            value={data.id}
            className="col form-control bg-light border-0"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <hr />
    </>
  );
};

export default Form;
