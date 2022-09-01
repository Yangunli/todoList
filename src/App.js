import { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, todo: "把冰箱發霉的檸檬拿去丟", status: false },
    { id: 2, todo: "打電話叫媽媽匯款給我", status: false },
    { id: 3, todo: "整理電腦資料夾", status: false },
    { id: 4, todo: "繳電費水費瓦斯費", status: false },
    { id: 5, todo: "約vicky禮拜三泡溫泉", status: false },
    { id: 6, todo: "約ada禮拜四吃晚餐", status: false },
  ]);

  const [tab, setTab] = useState([
    { name: "全部", active: true },
    { name: "待完成", active: false },
    { name: "已完成", active: false },
  ]);
  const [currentTab, setCurrentTab] = useState("全部");

  const [newTask, setNewTask] = useState("");
  // const [updateData, setUpdateData] = useState("");

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
    setTodoList(todoList.filter((task) => task.status !== true));
  };

  const markDone = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  function handleTab(index) {
    tab.map((item, i) => {
      if (i === index) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setTab([...tab]);
    setCurrentTab(tab[index].name);
  }

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
                {tab.map((t, index) => {
                  return (
                    <li key={index}>
                      <p
                        className={t.active ? "active" : ""}
                        onClick={() => {
                          handleTab(index);
                        }}
                      >
                        {t.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <div className="todoList_items">
                {todoList && todoList.length ? "" : "沒有待辦事項"}
                {todoList
                  .filter((item) => {
                    if (currentTab === "全部") return true;
                    if (currentTab === "待完成") return !item.status;
                    if (currentTab === "已完成") return item.status;
                  })

                  .map((to, i) => {
                    return (
                      <TodoItems
                        to={to}
                        key={i}
                        deleteTask={deleteTask}
                        markDone={markDone}
                      />
                    );
                  })}

                <div className="todoList_statistics">
                  <p>
                    {todoList.filter((todo) => todo.status !== true).length}
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
