import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/UserAuth'
import Navbar from './Navbar';
import Content from './Content';
import Description from './Description';

const Home = () => {
  const { user } = useContext(AuthContext)
  const[amount , setAmount] = useState("");
  const[date , setDate] = useState("");
  const[description , setDes] = useState("");
  let balance = 0;
  const id = user.msg?._id
  const handleprofit = async (e)=>{
    e.preventDefault();
    const value = "profit"
    const r = amount.search(" ");
    const price = amount.slice(0 , r);
     balance = parseFloat(balance)+parseFloat(price);
    
   const response = await fetch("http://localhost:1000/tracker" , {
      method:"POST" , 
      body:JSON.stringify({amount, description , value , date , id}),
      headers:{"Content-Type":"application/json"}
    })
    .then((response)=>response.json())
    .then((res)=>console.log(res))
  }
  const handleLoss = async (e)=>{
    e.preventDefault();
    
    const value = "loss"
    const r = amount.search(" ");
    const price = amount.slice(0 , r);
    balance = parseFloat(balance)-parseFloat(price);
    
   const response = await fetch("http://localhost:1000/tracker" , {
      method:"POST" , 
      body:JSON.stringify({amount, description , value , date, id}),
      headers:{"Content-Type":"application/json"}
    })
    .then((response)=>response.json())
    .then((res)=>console.log(res))
    const pricei = amount.search(" ");
    const pro = amount.slice(0 , pricei);
  }
  
  console.log(user);
  
  return (
    <>
      <div className="main">
        <Navbar></Navbar>
        <div className='Form'>
          <form action="">
            <input type="text" id='text' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
            <input type="datetime-local" id='date'  value={date} onChange={(e)=>(setDate(e.target.value))}/>
            <br />
            <input type="text" placeholder='description' className='Description' onChange={(e)=>setDes(e.target.value)} />
            <div className="plus">
            <button className='button' onClick={handleprofit}>+</button>
            <button className='button' onClick={handleLoss}>-</button>
            </div>
          </form>
        </div>
        <Description balance={balance}></Description>
      </div>
    </>
  )
}

export default Home
