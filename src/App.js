import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [itemsList, setItemsList] = useState([
    { key: 1, text: "Watering plants" },
    { key: 2, text: "Do Yoga" },
  ]);

  const updateNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const getNewTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    setItemsList([{ key: Date.now(), text: newTodo }, ...itemsList]);
    e.target.reset();
  };

  const removeTodo = (key) => {
    setItemsList(itemsList.filter((itemList) => itemList.key !== key));
  };

  return (
    <div className="App">
      <form className="todo-form" onSubmit={getNewTodo}>
        <input
          placeholder="Your todos..."
          className="submit-bar"
          onChange={updateNewTodo}
        />
        <button type="submit" className="submit-btn">
          Add
        </button>
        <ul className="todo-list">
          {itemsList.map((itemList) => (
            <li key={itemList.key} className="todo-items">
              {itemList.text}
              <a className="delete" onClick={() => removeTodo(itemList.key)}>
                X
              </a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
