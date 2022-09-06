import React from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import DeleteBtn from "./DeleteBtn";
import Button from "@mui/material/Button";

const Table = (props) => {
  const { items, setItems } = props;

  const successCallback = (id) => {
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <Stack>
      {items.map((item) => (
        <Stack key={item._id} direction="row" spacing={2} className="mb-3">
          <h5 className="col">{item.name}</h5>
          <Link to={`/edit/${item._id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained">Edit</Button>
          </Link>
          <DeleteBtn id={item._id} onDelete={successCallback} />
        </Stack>
      ))}
    </Stack>
  );
};

export default Table;
