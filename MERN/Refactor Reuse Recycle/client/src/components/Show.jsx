import React from "react";
import { useHistory } from "react-router-dom";

import DeleteBtn from "./DeleteBtn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Show = (props) => {
  const { item } = props;
  const history = useHistory();

  const successDelete = (id) => {
    history.push("/");
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h3">
          {item.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <p>
            <span className="h4">Price:</span> SR {item.price}
          </p>
          <p>
            <span className="h4">Description:</span> {item.description}
          </p>
        </Typography>
        <br />
        <DeleteBtn id={item._id} onDelete={successDelete} />
      </CardContent>
    </Card>
  );
};

export default Show;
