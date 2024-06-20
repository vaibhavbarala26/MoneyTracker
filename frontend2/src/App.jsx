import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Register from './Register'
import { Route  , Routes} from "react-router-dom"
import Home from './Home'
import Logout from './Logout'
import LandingPage from './Page/LandingPage'
import { AuthContext } from './Context/UserAuth'
import NotFound from './NotFound'

function App() {
  const {token} = useContext(AuthContext)
  

  return (
    <>
    <div className="main">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path="/login"  element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {token ? <Route path="/home" element={<Home></Home>}></Route> : <Route path="/home" element={<NotFound></NotFound>}></Route>}
        <Route path="/logout" element={<Logout></Logout>}></Route>
      </Routes>
    </div>
    </>
  )
}
export default App
