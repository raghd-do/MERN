import React from "react";
import { Context } from "../context";

const Form = (props) => {
  const context = React.useContext(Context);
  return (
    <form className="container mt-5">
      <div className="form-group">
        <label className="form-label h5 me-4">Your Name</label>
        <input
          type="text"
          value={context.name}
          onChange={(e) => context.setName(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
