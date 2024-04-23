import React, { useState } from 'react'

const Task = ({ task, index, completeTask, removeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateTask(index, editText);
      setIsEditing(false);
    }
  }

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleBlur = () => {
    updateTask(index, editText);
    setIsEditing(false);
  };

  return (
    <div
    className={`task ${task.completed ? 'completed' : ''}`}
    style={{ textDecoration: task.completed ? 'line-through' : '' }}
    onDoubleClick={handleDoubleClick}
  >
      {isEditing ? (<input
        className='edit-input'
        type='text'
        value={editText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        autoFocus />) :
        (<div style={{ textDecoration: task.completed ? 'line-through' : '' }} onDoubleClick={handleDoubleClick}>
          {task.text}
        </div>)}
      <div>
        <button onClick={() => completeTask(index)}>{task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={() => removeTask(index)}>X</button>
      </div>
    </div>
  );
};

export default Task;
