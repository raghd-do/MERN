import React, { useState } from "react";

const TodosList = (props) => {
  return (
    <div className="d-grid gap-3">
      {props.todos.map((todo, index) => (
        <div key={todo.id} className="card border-info">
          <div className="card-body">
            {todo.completed ? (
              <p className="mb-3 h5">
                <s>{todo.todo}</s>
              </p>
            ) : (
              <p className="mb-3 h5">{todo.todo}</p>
            )}
            <div className="d-flex text-end">
              <input
                type="checkbox"
                className="col-1"
                checked={todo.completed}
                onChange={(e) => props.done(todo.id)}
              />
              <button
                className="btn btn-sm btn-outline-danger col-auto"
                onClick={() => props.delete(todo.id)}
              >
                <i class="bi bi-x-square"></i> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
