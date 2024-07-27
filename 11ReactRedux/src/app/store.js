//single source of truth and every website has only one store!!

// steps to create store:
//1.) import configure store from redux toolkit
//2.) for now export it:
// create the reducers in your .jsx files and then:
//3.) importing the reducers we created!!

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'


export const store = configureStore({
    reducer: todoReducer
})