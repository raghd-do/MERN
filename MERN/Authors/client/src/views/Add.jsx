import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Form from "../components/Form";
import Alert from "@mui/material/Alert";

const Add = (props) => {
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const init = {
    name: "",
  };

  // Create
  const addAuthor = (author) => {
    setErrors([]);
    axios
      .post("http://localhost:8000/api/authors", author)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        let { errors } = err.response.data;
        let errs = [];
        for (let field in errors) {
          errs.push(errors[field].message);
        }
        setErrors(errs);
      });
  };

  return (
    <>
      <div className="text-start mb-4">
        <h1 className="mb-3">Favorite authors</h1>
        <Link to="/" className="mb-3">
          Home
        </Link>
        <p>Add a new author:</p>
      </div>
      {errors.map((err, i) => (
        <Alert variant="outlined" severity="error" key={i} className="mb-2">
          {err}
        </Alert>
      ))}
      <Form init={init} onSubmit={addAuthor} />
    </>
  );
};

export default Add;
