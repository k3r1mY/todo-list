import { useEffect, useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTasks = [...tasks, { text, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const updateTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="task-list">
        <h1>To-do-list</h1>
        <TaskForm addTask={addTask} />
        <div>
          <button onClick={() => handleFilterChange("all")}>All Tasks</button>
          <button onClick={() => handleFilterChange("completed")}>
            Completed Tasks
          </button>
        </div>

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <TaskList
          tasks={
            filter === "all"
              ? tasks.filter(
                  (task) =>
                    task.text &&
                    task.text.toLowerCase().includes(searchTerm.toLowerCase())
                )
              : tasks.filter(
                  (task) =>
                    task.completed &&
                    task.text &&
                    task.text.toLowerCase().includes(searchTerm.toLowerCase())
                )
          }
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
        <div>
          <p>
            Total tasks remaining:{" "}
            {tasks.filter((task) => !task.completed).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
