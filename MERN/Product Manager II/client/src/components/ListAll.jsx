import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListAll = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-center mt-5">
      <h1>All Products:</h1>
      <br />
      {products.map((p) => (
        <div className="row mb-3">
          <Link key={p._id} to={`/${p._id}`} className="h6">
            {p.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListAll;
