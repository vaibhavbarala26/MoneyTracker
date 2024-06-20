import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/20664822.jpg"
const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='navi'>
        <span>KHARCHA TRACKER</span>
        <div className="but">
          <Link to={"/login"}><button id="lo">Login</button></Link>
          <Link to={"/register"}><button>Get Started</button></Link>
        </div>
      </div>
      <div className="heading1">
        <div className="text">
          <h1>TRACKING<br></br><span> THE EXPENSE</span> </h1>
        </div>
      </div>
      <div className="down">
          <p>Help in tracking the expenses</p>
          <Link to={"/register"}><button>Get Started</button></Link>
        </div>
        <img src={img} alt="" />
    </div>
  )
}

export default LandingPage
