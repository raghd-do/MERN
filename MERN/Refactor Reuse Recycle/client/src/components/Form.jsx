import React, { useState } from "react";

const Form = (props) => {
  const { init, onSubmit } = props;
  const [data, setData] = useState(init);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData(init);
  };

  return (
    <div className="card p-5">
      <h3 className="mb-5">Product Manager</h3>
      <form onSubmit={handleSubmit} className="text-start">
        <div className="form-group row mb-3">
          <label className="col-3 form-label h5">Title</label>
          <input
            type="text"
            className="col form-control"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="form-group row mb-3">
          <label className="col-3 form-label h5">Price</label>
          <input
            type="number"
            className="col form-control"
            min="0"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div className="form-group row mb-3">
          <label className="col-3 form-label h5">Description</label>
          <input
            type="text"
            className="col form-control"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
