import React from "react";
import { Link } from "react-router-dom";

import DeleteBtn from "./DeleteBtn";

const List = (props) => {
  const { list, setList } = props;

  const successCallback = (id) => {
    setList(list.filter((item) => item._id !== id));
  };

  return (
    <div className="text-center mt-5">
      <h1>All Products:</h1>
      <br />
      {list.map((item) => (
        <div key={item._id} className="row mb-3">
          <Link to={`/${item._id}`} className="h6 col">
            {item.title}
          </Link>
          <Link
            to={`/${item._id}/edit`}
            className="col-auto mx-2 btn btn-primary"
          >
            Edit
          </Link>
          <DeleteBtn id={item._id} onDelete={successCallback} />
        </div>
      ))}
    </div>
  );
};

export default List;
