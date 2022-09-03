import React from "react";
import { useHistory } from "react-router-dom";

import DeleteBtn from "./DeleteBtn";

const Show = (props) => {
  const { item } = props;
  const history = useHistory();

  const successDelete = (id) => {
    history.push("/");
  };

  return (
    <div className="card p-5 text-start">
      <h1 className="text-center">{item.title}</h1>
      <h6>
        <span className="h4">Price:</span> SR {item.price}
      </h6>
      <h6>
        <span className="h4">Description:</span> {item.description}
      </h6>
      <br />
      <DeleteBtn id={item._id} onDelete={successDelete} />
    </div>
  );
};

export default Show;
