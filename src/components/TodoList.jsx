import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todoElement, setTodoElement] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const handleInputChange = (e) => {
    setTodoElement(e.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, todoElement]);
    console.log(todoElement);
  };

  return (
    <div className="cantainer">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="enter task"
          value={todoElement}
          onChange={handleInputChange}
        />
        <button id="add" onClick={handleClick}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default TodoList;
