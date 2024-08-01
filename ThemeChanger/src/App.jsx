import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'
import ThemeButton from './components/ThemeButton'
import { ThemeContextProvider } from './ThemeContext/theme'
import { ThemeContext } from './ThemeContext/theme'


function App() {

  const [themeMode, setThemeMode] = useState("dark");

  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
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
    </ ThemeContextProvider>
  )
}

export default App;
