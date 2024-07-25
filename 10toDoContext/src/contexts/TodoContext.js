import {createContext, useContext} from "react"


export const TodoContext = createContext({
    //creating default context:
    todos: [
        {
            id: 1,
            todo: " Enter a message: ",
            completed: false
        }
    ],
    //some definitions of the functions which we will be needing further:
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}