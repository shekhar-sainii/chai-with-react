import { useState } from 'react'
import './App.css'

function App() {
  const [lenght, setlenght] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [Password, setPassword] = useState('')

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
