import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// so basically you are creating context using createContext and we are passing default values. in this example we are creating variable theme context in which we are storing the default theme for our page. And then using the themeprovider variable we are passing provider for this context.

export const ThemeProvider = ThemeContext.Provider

// also in the app.jsx file, the component which is doing the useContext() call should be below the <Context.Provider>


export default function useTheme(){
    return useContext(ThemeContext)
}

// the function usetheme here is used to pass the value of themecontext to usecontext so that it changes the default values according to the values passed which are stored in themecontext.