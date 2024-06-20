import React from 'react'

const Content = ({data}) => {
  const index = data.amount.search(" ");
  const price = data.amount.slice(0 , index);
  const heading = data.amount.slice(index+1 , data.amount.length)
  const datei = data.date.search("T");
  const date = data.date.slice(0 , datei);
  const time = data.date.slice(datei+1 , data.date.length )
  return (
    <div className='content'>
        <div className="heading">
        <h2>{heading}</h2>
       {data.description ? <p>{data.description}</p> : <p>Needed</p> }
        </div>
        <div className="readind">
        {data.value === "profit" ? <h2 style={{color:"green"}}>+{price}</h2>:<h2 style={{color:"red"}}>-{price}</h2> }
        <p>{date} {time}</p>
        </div>
      
    </div>
  )
}

export default Content
