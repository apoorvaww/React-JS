import {createSlice, nanoid} from '@reduxjs/toolkit'

//initial state of the store:

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
}


//slice is almost like a reducer and reducer is just a functionality

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers is an object that has properties and functions:
    //in context API we just declared the functions
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map( (todo) => todo.id === action.payload.id ? action.payload.text : todo )
            
        }

    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer




// In addTodo we will always have two variables: state and action as parameters. State variable will give access to the values in the intialState and action variable will give us access to a few values.
//Actions are js objects which are only source of information for store.
//The store is the object which holds the state of the application. The store makes passing around of components a lot easier.
// In action keyword we have a payload object with key-value pairs and represent different pieces of data.