import React from "react";
import { Context } from "../context";

const Navbar = (props) => {
  const context = React.useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-dark px-4">
      <h1 className="text-end text-light">Hi {context.name} !</h1>
    </nav>
  );
};

export default Navbar;
