import { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="App">
      <div className="task-list">
        <h1>To-do-list</h1>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
