import { useState } from 'react'
import './App.css'

interface RegisterProps {
  registerData?: (newType: string) => void;
    Pregister?: number;
  
}

function Register({ registerData ,Pregister}: RegisterProps) {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [cPassword,setCPassword]=useState("")
    const[dataShow,SetDataShow]=useState("")

    const Submit = () => {
    const data = { name, password,email,cPassword }
  SetDataShow(JSON.stringify(data));
  if(registerData){
      registerData(JSON.stringify(data))
    }
  }
  
  const Reset = () => {
    setName("")
    setPassword("")
    SetDataShow("")
    setEmail("")
    setCPassword("")
    if(registerData){
      registerData("")
    }
  }
  
  return (
    <>
      
    <p>{Pregister}</p>
      <h2>Registration Form</h2>
      <p>{name}</p>
      <input type="text" placeholder="Username"  value={name} onChange={(e)=>setName(e.target.value)}/>

      <p>{email}</p>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        
     <p>{password}</p>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    <p>{cPassword}</p>
      <input type="password" placeholder="Confirm-Password" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} />

    <br></br>
    <br></br>
      <button onClick={Reset}>Reset</button> <button onClick={Submit}>Register</button>
      <p>{dataShow}</p>
        
      
    </>
  )
}

export default Register
