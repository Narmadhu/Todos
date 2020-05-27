import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="todo-form">
        <input placeholder="Your todos..." className="submit-bar" />
        <button type="submit" className="submit-btn">
          Add
        </button>
        <ul className="todo-list">
          <li className="todo-items">
            <a className="delete">X</a>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
