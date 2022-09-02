import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Show = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card p-5">
      <h1 className="text-center">{product.title}</h1>
      <h6>
        <span className="h4">Price:</span> SR {product.price}
      </h6>
      <h6>
        <span className="h4">Description:</span> {product.description}
      </h6>
      <br />
      <button
        onClick={(e) => deleteProduct(id)}
        className="btn btn-outline-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default Show;
