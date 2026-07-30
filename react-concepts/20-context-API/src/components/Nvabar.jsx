import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"



function Nvabar() {
    const [theme , setTheme] = useContext(ThemeDataContext)
 
    const setData = () => {
     if (theme === 'light') {
       setTheme('Dark')
     } else {
       setTheme('light')
     }
   }
  return (
    <div
    className='nav flex  justify-between bg-red-500'>
        <h2 className='text-white  text-3xl m-4 '>{theme}</h2>
        <button onClick={ setData} className='bg-white m-3 p-2 h-10 w-30 shadow-xl'>click</button>
    </div>
  )
}

export default Nvabar