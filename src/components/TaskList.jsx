import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, completeTask, removeTask, updateTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
