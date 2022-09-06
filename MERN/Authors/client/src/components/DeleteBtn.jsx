import React from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteBtn = (props) => {
  const { id, onDelete } = props;

  const hundleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        onDelete(id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={(e) => hundleDelete(id)}
      className="col-auto mx-2 btn btn-outline-danger"
    >
      Delete
    </Button>
  );
};

export default DeleteBtn;
