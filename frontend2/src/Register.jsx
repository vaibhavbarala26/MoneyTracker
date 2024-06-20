import React, { useState } from 'react'
import "./App.css"
import { Link, Navigate } from 'react-router-dom';
const Register = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [redirect , setRedirect] = useState(false);
    const handlesubmit = async (e)=> {
      e.preventDefault();
       await fetch("http://localhost:1000/register", {
        method:"POST", 
        body:JSON.stringify({username , password}),
        headers:{"Content-Type" : "application/json"},
    })
    .then((res)=>{
    if(res.ok){
      setRedirect(true)
    }
    }
  )
}
    if(redirect){
      return <Navigate to={"/login"}></Navigate>
    }

  return (
    <div>
        <div className='loginmain' >
            <form action="" className="login" onSubmit={handlesubmit}>
                <h1>Register</h1>
                <input type="text" value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <input type='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button>Register</button>
                <p>Registered , Login here <Link to="/login">Login</Link></p>
            </form>
        </div>

    </div>
  )
}

export default Register
