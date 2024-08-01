import { useContext, createContext } from "react";

export const ThemeContext = createContext( {
    themeMode: "dark",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}