import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div>
      <h1 className="mb-3">
        We're sorry, but we could not find the author you are looking for.
      </h1>
      <Link to="/new">Would you like to add this author to our database?</Link>
    </div>
  );
};

export default NotFound;
