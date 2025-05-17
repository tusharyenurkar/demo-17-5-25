import { useState } from 'react'
import Login from './Login'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
        
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </>
  )
}

export default App
