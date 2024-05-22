import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faCheck,faRotateLeft } from '@fortawesome/free-solid-svg-icons'; // Correctly import the faTrash icon


const Task = ({ task, index, completeTask, removeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateTask(index, editText);
      setIsEditing(false);
    }
  };

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
      {isEditing ? (
        <input
          className='edit-input'
          type='text'
          value={editText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div
          style={{ textDecoration: task.completed ? 'line-through' : '' }}
          onDoubleClick={handleDoubleClick}
        >
          {task.text}
        </div>
      )}
      <div>
        <button onClick={() => completeTask(index)}>
          {task.completed ? <FontAwesomeIcon icon={faRotateLeft} /> : <FontAwesomeIcon icon={faCheck} />}
        </button>
        <button onClick={() => removeTask(index)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Task;
