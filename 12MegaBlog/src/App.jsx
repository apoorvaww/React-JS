import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authservice from '../appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          //dispatching the data to auth slice so that we can maintain the authentication status of the user
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>

    </div>
  ) : null

}

export default App
