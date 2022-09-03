import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Show from "../components/Show";

const Detail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <Show item={product} />;
};

export default Detail;
