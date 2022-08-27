import React, { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={addTodo} className="mb-5">
      <input
        className="form-control mb-3"
        placeholder="Get MERN black belt"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
