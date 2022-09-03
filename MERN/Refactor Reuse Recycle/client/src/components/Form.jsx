import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Form = (props) => {
  const { init, onSubmit } = props;
  const [data, setData] = useState(init);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData(init);
  };

  return (
    <Card>
      <CardContent className="p-5">
        <h3 className="mb-5">Product Manager</h3>
        <form onSubmit={handleSubmit} className="text-start">
          <div className="form-group row mb-3">
            <label className="col-3 form-label h5">Title</label>
            <input
              type="text"
              className="col form-control"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="form-group row mb-3">
            <label className="col-3 form-label h5">Price</label>
            <input
              type="number"
              className="col form-control"
              min="0"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
          </div>
          <div className="form-group row mb-3">
            <label className="col-3 form-label h5">Description</label>
            <input
              type="text"
              className="col form-control"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
          <Button
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
