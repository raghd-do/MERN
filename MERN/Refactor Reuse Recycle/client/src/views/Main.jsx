import React, { useEffect, useState } from "react";
import axios from "axios";

import Form from "../components/Form";
import List from "../components/List";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [added, setAdded] = useState(false);
  const init = {
    title: "",
    price: 0,
    description: "",
  };

  // Create
  const addProduct = (product) => {
    axios
      .post("http://localhost:8000/api/products/new", product)
      .then((res) => {
        setProducts([...products, res.data]);
        setAdded(!added);
      })
      .catch((err) => console.log(err));
  };

  // Read
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [added]);

  return (
    <>
      <Form init={init} onSubmit={addProduct} />
      <br />
      <List list={products} setList={setProducts} />
    </>
  );
};

export default Main;
