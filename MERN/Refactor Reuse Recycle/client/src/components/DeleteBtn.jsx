import React from "react";
import axios from "axios";

const DeleteBtn = (props) => {
  const { id, onDelete } = props;

  const hundleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        onDelete(id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={(e) => hundleDelete(id)}
      className="col-auto mx-2 btn btn-outline-danger"
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
