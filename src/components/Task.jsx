import React from 'react'

const Task = ({task,index,completeTask,removeTask}) => {
  return (
        <div className='task' style = {{textDecoration : task.completed ? 'line-through': ''}}>
        {task.text}
        <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => removeTask(index)}>X</button>
    </div>
    </div>
  );
};

export default Task