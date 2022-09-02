import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListAll = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setLoading(true);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProducts(products.filter((product) => products._id !== id));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center mt-5">
      <h1>All Products:</h1>
      <br />
      {loading &&
        products.map((p) => (
          <div key={p._id} className="row mb-3">
            <Link to={`/${p._id}`} className="h6 col">
              {p.title}
            </Link>
            <Link
              to={`/${p._id}/edit`}
              className="col-auto mx-2 btn btn-primary"
            >
              Edit
            </Link>
            <button
              onClick={(e) => deleteProduct(p._id)}
              className="col-auto mx-2 btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default ListAll;
