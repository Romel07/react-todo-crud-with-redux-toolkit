import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAsyncTodo } from '../redux/todoSlice';

const AddTodoForm = () => {

    const dispatch = useDispatch()

    const [addTodo, setAddTodo] = useState('')

    // console.log("addtodo", addTodo)

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(postAsyncTodo({title: addTodo}))
        setAddTodo('')
    }

    return (

        <form onSubmit={handleAddTodo} className='row mt-3 mb-3 d-flex'>
            <label className='visually-hidden'>Name</label>
            <div className='col-auto'>
                <input onChange={(e) => setAddTodo(e.target.value)} value={addTodo} className='form-control mb-2 me-2' type='text' placeholder='Add todo...' ></input>
            </div>
            <div className='col-auto'>
                <button type='submit' className='btn btn-primary mb-2'>Submit</button>
            </div>
        </form>

    );
};

export default AddTodoForm;