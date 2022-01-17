import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAsynTodos } from '../redux/todoSlice';
import TodoItem from './TodoItem'


const TodoList = () => {

    const todos = useSelector(state => state.todos)
    // console.log('Todos: ', todos)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAsynTodos())

    }, [dispatch])

    // const todos = [
    //     { id: 1, title: 'todo1', completed: false },
    //     { id: 2, title: 'todo2', completed: true },
    //     { id: 3, title: 'todo3', completed: false },
    //     { id: 4, title: 'todo4', completed: false },
    //     { id: 5, title: 'todo5', completed: true }
    // ]

    return (
        <ul className='list-group'>
            {
                todos.map((todo) => {
                    return <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                })
            }
        </ul>
    );
};

export default TodoList;