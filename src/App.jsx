import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Salom Bolar</h1>
       <div className="container">
          Lorem ipsum dolor sit amet.
       </div>

       <div className='name' chegirma="chegirma">Name: </div>
    </>
  )
}

export default App
