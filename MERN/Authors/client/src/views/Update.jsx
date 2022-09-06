import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

import Form from "../components/Form";
import Alert from "@mui/material/Alert";

const Update = (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  // Read
  useEffect(() => {
    setLoaded(false);
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        history.push("/404");
      });
  }, [history, id, updated]);

  // Update
  const updateAuthor = (author) => {
    setErrors([]);
    setUpdated(false);
    axios
      .put(`http://localhost:8000/api/authors/${id}`, author)
      .then((res) => {
        setUpdated(true);
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
        <p>Edit this author:</p>
      </div>
      {errors.map((err, i) => (
        <Alert variant="outlined" severity="error" key={i} className="mb-2">
          {err}
        </Alert>
      ))}
      {loaded && <Form init={author} onSubmit={updateAuthor} />}
    </>
  );
};

export default Update;
