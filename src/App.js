import { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, todo: "把冰箱發霉的檸檬拿去丟", status: false },
    { id: 2, todo: "打電話叫媽媽匯款給我", status: false },
    { id: 3, todo: "整理電腦資料夾", status: false },
    { id: 4, todo: "繳電費水費瓦斯費", status: false },
    { id: 5, todo: "約vicky禮拜三泡溫泉", status: false },
    { id: 6, todo: "約ada禮拜四吃晚餐", status: false },
  ]);

  // const [inputTodo, setInputTodo] = useState({ todo: "" });

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = todoList.length + 1;
      let newEntry = { id: num, todo: newTask, status: false };
      setTodoList([...todoList, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const removeDone = () => {
    let newTasks = todoList.filter((task) => task.status !== true);
    setTodoList(newTasks);
  };

  const markDone = (id) => {
    // let newTask = todoList.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, status: !task.status };
    //   }
    //   return task;
    // });
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="App">
      <div id="todoListPage" className="bg-half">
        <nav>
          <h1>
            <a href="/">ONLINE TODO LIST</a>
          </h1>
        </nav>
        <div className="conatiner todoListPage vhContainer">
          <div className="todoList_Content">
            <div className="inputBox">
              <Input
                setNewTask={setNewTask}
                newTask={newTask}
                addTask={addTask}
              />
            </div>
            <div className="todoList_list">
              <ul className="todoList_tab">
                <li>
                  <p>全部</p>
                </li>
                <li>
                  <p>待完成</p>
                </li>
                <li>
                  <p>已完成</p>
                </li>
              </ul>
              <div className="todoList_items">
                {todoList && todoList.length ? "" : "沒有代辦事項"}
                <TodoList
                  todoList={todoList}
                  deleteTask={deleteTask}
                  markDone={markDone}
                />

                <div className="todoList_statistics">
                  <p>
                    {" "}
                    {
                      todoList.filter((todo) => todo.status !== true).length
                    }{" "}
                    個待完成項目
                  </p>
                  <p onClick={removeDone}>清除已完成項目</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
