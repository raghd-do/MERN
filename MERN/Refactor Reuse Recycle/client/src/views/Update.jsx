import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Form from "../components/Form";

const Update = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Read
  useEffect(() => {
    setLoaded(false);
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id, updated]);

  // Update
  const update = (product) => {
    axios
      .put(`http://localhost:8000/api/products/${id}`, product)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((err) => console.log(err));
  };

  return loaded && <Form init={product} onSubmit={update} />;
};

export default Update;
