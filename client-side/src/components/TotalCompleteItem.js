import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItem = () => {

    const todos =  useSelector(state => state.todos)
    const completedTodos = todos.filter(todo=> todo.completed === true).length
    // console.log(completedTodos)

    return (
        <div>
            <h4 className='mt-3'>Total Completed Items : {completedTodos} </h4>
        </div>
    );
};

export default TotalCompleteItem;