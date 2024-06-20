import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <h1>Kharcha Tracker</h1>
        <div className="buton"><Link to={"/logout"}><button>
        Logout</button></Link></div>
      </div>
    </div>
  )
}

export default Navbar
