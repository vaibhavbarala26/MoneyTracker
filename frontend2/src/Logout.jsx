import React, { useContext, useEffect } from 'react'
import { AuthContext } from './Context/UserAuth'
import { Navigate } from 'react-router-dom'
const Logout = () => {
    const {Logoutuser} = useContext(AuthContext)
    useEffect(()=>{
        Logoutuser();
    } , [Logoutuser])
    return <Navigate to ={"/"}></Navigate>
  return (
    <div>
      
    </div>
  )
}

export default Logout
