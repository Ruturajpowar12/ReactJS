import { createContext } from "react"
import { useState } from "react";

 export const ThemeDataContext = createContext()

function ThemeContext(props) {
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <ThemeDataContext.Provider value ={[theme, setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>
            
        
    </div>
  )
}

export default ThemeContext