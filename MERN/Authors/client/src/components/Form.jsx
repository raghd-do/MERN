import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <form onSubmit={handleSubmit} className="text-start">
          <div className="form-group row mb-3">
            <label className="col-3 form-label h5">Name</label>
            <input
              type="text"
              className="col form-control"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="form-group row">
            <Link to="/" className="col" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Link>
            <Button
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              type="submit"
              className="col"
            >
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
