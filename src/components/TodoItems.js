import React from "react";

const TodoItems = ({ to, i, deleteTask, markDone }) => {
  return (
    <li key={i}>
      <label className={to.status ? " todoList_label done " : "todoList_label"}>
        <input
          className="todoList_input"
          type="checkbox"
          value="true"
          onClick={(e) => markDone(to.id)}
          checked={to.status === true}
        />
        <span>{to.todo}</span>
      </label>
      <button>
        <i className="fa fa-times" onClick={() => deleteTask(to.id)} />
      </button>
    </li>
  );
};

export default TodoItems;
