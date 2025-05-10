import { useContext } from 'react'
import './App.css'
import { useTimer } from './useTimer'
import { ThemeContext } from './contextApi/Context'

function App() {
  let time = useTimer(0)

  let {theme, setTheme} = useContext(ThemeContext)

  return (
    <>
      <h1>Time : {time}</h1>
      <h2>{theme}</h2>
      <button onClick={()=> setTheme('Light')}>Toggle Theme</button>
    </>
  )
}

export default App
