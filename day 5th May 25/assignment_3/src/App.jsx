import { useState } from 'react'
import './App.css'
import { Greeting } from './Greeting'

function App() {
  const [name, setName] = useState('')
  const [showGreet, setShowGreet] = useState(false)

  const timeOfDay = new Date().getHours()
  console.log(name, timeOfDay)

  const handleClick = () => {
    if(name.trim() == '') {
      alert('Please Enter valid name')
      return
    }
    setShowGreet(true)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <input type="text" onChange= {handleChange} value={name} placeholder='Enter your name' />
      <button onClick={handleClick}>Greet</button>
      { showGreet ? (<Greeting 
        name = {name} 
        timeOfDay = {timeOfDay}
        showGreet = {showGreet}
      />) 
      : 
      ( 
        <h1></h1>
      ) }

    </>
  )
}

export default App
