import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Table from "../components/table";

const Main = (props) => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Read
  useEffect(() => {
    setLoaded(false);
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        let data = res.data;
        let sorted = data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else {
            return 1;
          }
        });
        setAuthors(sorted);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="text-start">
        <h1>Favorite authors</h1>
        <Link to="/new" className="mb-3">
          Add an author
        </Link>
        <p>We have quotes by:</p>
      </div>
      <br />
      {loaded && <Table items={authors} setItems={setAuthors} />}
    </>
  );
};

export default Main;
