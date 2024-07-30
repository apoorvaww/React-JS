import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Github, User, Footer, Header, Contact } from '../src/components/index.js'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "user",
//         element: <User />
//       },
//       {
//         path: 'github',
//         element: <Github />
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout /> } >
      <Route path ='' element={<Home />}/>
      <Route path='about' element= {<About/>} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />}/>
      <Route path='github' element={<Github />} />

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
