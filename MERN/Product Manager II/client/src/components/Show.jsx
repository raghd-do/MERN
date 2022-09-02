import React from "react";

const Show = (props) => {
  return (
    <div className="card p-5">
      <h1 className="text-center">{props.p.title}</h1>
      <h6>
        <span className="h4">Price:</span> SR {props.p.price}
      </h6>
      <h6>
        <span className="h4">Description:</span> {props.p.description}
      </h6>
    </div>
  );
};

export default Show;
