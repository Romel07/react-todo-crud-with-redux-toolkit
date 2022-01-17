import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAsynTodos = createAsyncThunk('todos/getAsynTodos', async () => {
    const response = await fetch('http://localhost:7000/todos')
        .then(response => response.json())
    // console.log('Response vi', response)
    return response
})

export const postAsyncTodo = createAsyncThunk('todos/postAsyncTodo', async (payload) => {
    const response = await fetch('http://localhost:7000/todos', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ "title": payload.title })
    })
    // console.log('payload', payload, 'response', response)
        .then(response => response.json())
        // console.log('postAsyncTodo response', response)
        return response
})

export const deleteAsyncTodo = createAsyncThunk('todos/deleteAsyncTodo', async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
        method: 'DELETE'
    })
    // console.log('deleteAsyncTodo', payload)
    // console.log(response)
    return payload
})


export const toggleAsyncComplete = createAsyncThunk('todos/toggleAsyncComplete', async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            completed: payload.checked
        })
    })
        // console.log(payload)
        .then(response => response.json())
    return response
})


const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAsynTodos.pending, (state, action) => {
                // console.log('Data Fetching pending... ...')    
            })

            .addCase(getAsynTodos.fulfilled, (state, action) => {
                // console.log('Data Fetching fulfilled... ...', state, action)
                return action.payload
            })

            .addCase(postAsyncTodo.fulfilled, (state, action) => {
                // console.log('action', action, 'state', state)
                state.push(action.payload)
            })

            .addCase(deleteAsyncTodo.fulfilled, (state, action) => {
                // console.log("action:", action, "State:",state)
                const todos = state.filter(todo => todo.id !== action.payload.id)
                return todos
            })

            .addCase(toggleAsyncComplete.fulfilled, (state, action) => {
                // console.log(action, state)
                const index = state.findIndex((todo) => todo.id === action.payload.id)
                // console.log(index)
                state[index].completed = action.payload.completed
            })
    }
})

export default todosSlice.reducer