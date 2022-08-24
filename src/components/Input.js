import React from "react";
import "../App.css";
const Input = ({ setNewTask, newTask, addTask }) => {
  return (
    <>
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        name="todo"
      />
      <button href="/" onClick={addTask}>
        <i className="fa fa-plus" />
      </button>
    </>
  );
};

export default Input;
