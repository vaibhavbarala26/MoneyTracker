import React, { useContext, useState } from 'react'
import "./App.css"
import { Link, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider} from "./Context/UserAuth"
const Login = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [redirect , setRedirect] = useState(false);
    const {storetokenInLS} = useContext(AuthContext)
    const handlelogin = async (e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:1000/login", {
        method:"POST", 
        body:JSON.stringify({username , password}),
        headers:{"Content-Type" : "application/json"},
      })
      if(response.ok){
        setRedirect(true);
      const res_data = await response.json();
      storetokenInLS(res_data.token);
      console.log(res_data.token);
      }
    }
    if(redirect){
      return <Navigate to={"/home"}></Navigate>
    }
  return (
    <div>
        <div className='loginmain' >
            <form action="" className="login" onSubmit={handlelogin}>
                <h1>Login</h1>
                <input type="text" value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <input type='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button>Login</button>
                <p>Not Registered , Register here <Link to="/register">Register</Link></p>
            </form>
        </div>

    </div>
  )
}

export default Login
