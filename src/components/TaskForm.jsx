import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
            <button type = "submit"> <FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}



export default TaskForm;