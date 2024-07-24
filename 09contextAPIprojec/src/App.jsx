import { useEffect, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'
import './App.css'

function App() {
  const[themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme using js
  useEffect( () => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme button component here */}
              <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/* Card button component */}
              <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
