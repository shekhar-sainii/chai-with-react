import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(5)

  const addValue = () => {
    console.log('Add value is ', count);
    count = count + 1
    setCount(count)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {count}</h2>

    <button
    onClick={addValue}
    >Add value {count}</button><br />
    <button
    onClick={removeValue}
    >Remove Value  {count}</button>

    <p>footer : {count}</p>
    </>
  )
}

export default App
