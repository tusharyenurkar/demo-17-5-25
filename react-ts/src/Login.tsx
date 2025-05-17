import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const[dataShow,SetDataShow]=useState("")

    const Submit = () => {
    const data = { name, password }
    SetDataShow(JSON.stringify(data))
    
  }

  const Reset = () => {
    setName("")
    setPassword("")
    SetDataShow("")
  }
  return (
    <>
      

      <h2>Login Form</h2>
      <p>{name}</p>
      <input type="text" placeholder="Username"  value={name} onChange={(e)=>setName(e.target.value)}/>

      <p>{password}</p>
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <p>{dataShow}</p>
     <button onClick={Reset}>Reset</button> <button onClick={Submit}>Login</button>


        
      
    </>
  )
}

export default App
