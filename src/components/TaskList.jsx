import React from 'react'
import Task from './Task'

const TaskList = ({tasks, completeTask, removeTask}) => {
  return (
    <div>
        {tasks.map((task , index)=> (
        <Task key = {index}
        index = {index}
        task = {task}
        completeTask = {completeTask}
        removeTask = {removeTask}
        />
    ))}
    </div>
  
);
};

export default TaskList