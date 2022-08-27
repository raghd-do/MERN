import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodosList from "./Components/TodosList";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.length > 0) {
      setTodos([...todos, { id: count, todo: text, completed: false }]);
      setCount(count + 1);
    } else {
      alert(
        'Wait a minit !, do you mean "am gonna do nothing !" \nYou can\'t Boy ! -_-'
      );
    }
  };

  const done = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const toggleDone = { ...todo, completed: !todo.completed };
        return toggleDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // setTodos(todos.filter((_todo, i) => i !== index));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <hr />
      <TodosList todos={todos} delete={deleteTodo} done={done} />
    </div>
  );
}

export default App;
