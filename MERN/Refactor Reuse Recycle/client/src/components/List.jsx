import React from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import DeleteBtn from "./DeleteBtn";
import Button from "@mui/material/Button";

const List = (props) => {
  const { list, setList } = props;

  const successCallback = (id) => {
    setList(list.filter((item) => item._id !== id));
  };

  return (
    <Stack>
      <h1>All Products:</h1>
      <br />
      {list.map((item) => (
        <Stack key={item._id} direction="row" spacing={2}>
          <Link
            to={`/${item._id}`}
            className=" col"
            style={{ textDecoration: "none" }}
          >
            <Button>{item.title}</Button>
          </Link>
          <Link to={`/${item._id}/edit`} style={{ textDecoration: "none" }}>
            <Button variant="contained">Edit</Button>
          </Link>
          <DeleteBtn id={item._id} onDelete={successCallback} />
        </Stack>
      ))}
    </Stack>
  );
};

export default List;
