import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAsyncTodo, toggleAsyncComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    
    const [checked, setChecked] = useState(false)

    const dispatch = useDispatch()

    const handleChange = () => {
        setChecked(!checked)
        // console.log(checked, id)
        dispatch(toggleAsyncComplete({id, checked}))
    }

    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deleteAsyncTodo({id:id}))
    }
    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className="d-flex align-items-center">
                    <input onChange={handleChange} className='me-3' type="checkbox" checked={completed} name="" id="" />
                    {title}
                </span>
                <button onClick={() => handleDelete(id)} className='btn btn-danger'>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;