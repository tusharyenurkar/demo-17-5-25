import { useState } from 'react'
import Login from './Login'
import Register from './Register'




function App() {
  const [count, setCount] = useState(0)
  //login to app
  const [loginOutput, setLoginOutput] = useState("")
  const[parentRegister,setParentRegister]=useState("")

  return (
    <>
      <Login  loginData={setLoginOutput} Plogin={ count}/>
      <Register  registerData={setParentRegister} Pregister={count}/>
      
        
      
        <button 
          onClick={() => {
            if(count < 15){
              setCount((count) => count + 5)
            }
          }}
         
        >
          count is {count}
        </button>

         <p>{loginOutput}</p>
        <p>{parentRegister}</p>
        
    </>
  )
}

export default App
