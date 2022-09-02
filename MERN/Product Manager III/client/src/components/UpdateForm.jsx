import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateForm = (props) => {
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

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="card p-5">
      <h3 className="mb-5">Product Manager</h3>
      <form onSubmit={updateProduct} className="text-start">
        <div className="form-group row mb-3">
          <label className="col-3 form-label h5">Title</label>
          <input
            type="text"
            className="col form-control"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="form-group row mb-3">
          <label className="col-3 form-label h5">Price</label>
          <input
            type="number"
            className="col form-control"
            min="0"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="form-group row mb-3">
          <label className="col-3 form-label h5">Description</label>
          <input
            type="text"
            className="col form-control"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
