import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ todoList, deleteTask, markDone }) => {
  return (
    <ul className="todoList_item">
      {todoList.map((to, i) => (
        <TodoItems
          to={to}
          key={i}
          deleteTask={deleteTask}
          markDone={markDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
