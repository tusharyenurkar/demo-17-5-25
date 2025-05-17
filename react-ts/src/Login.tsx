import { useState } from 'react' 
import './App.css'

interface LoginProps {
  loginData?: (newType: string) => void;
    Plogin?: number;
  
}

function App({loginData,Plogin}: LoginProps) {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const[dataShow,SetDataShow]=useState("")

    const Submit = () => {
    const data = { name, password }
    SetDataShow(JSON.stringify(data));
    if(loginData){
      loginData(JSON.stringify(data))
    }
    
  }

  const Reset = () => {
    setName("")
    setPassword("")
    SetDataShow("")
    if(loginData){
      loginData("")
    }
  }
  return (
    <>
      
    <p>{Plogin}</p>
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
