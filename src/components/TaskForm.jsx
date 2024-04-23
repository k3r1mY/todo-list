import React,{useState} from 'react'

const TaskForm = ({addTask}) => {
    const [value,setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTask(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className='input' value={value}
            onChange={(e) => setValue(e.target.value)} placeholder='Add new task' />
            <button type = "submit"> Add</button>
        </form>
    )
}



export default TaskForm;