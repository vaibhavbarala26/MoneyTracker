import React, { useContext, useState } from 'react'
import Content from './Content'
import { useEffect } from 'react'
import { AuthContext } from './Context/UserAuth';

const Description = ({ data }) => {
  const [tracks, setTracks] = useState("");
  const { user } = useContext(AuthContext)
  const [profit , setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  useEffect(() => {
    fetch("http://localhost:1000/tracker", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => setTracks(res));
  }, [])
  const r = [];
  
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].id === user.msg?._id) {
      r.push(tracks[i]);
    }
  }
  const [balance , setbalance] = useState(0)
  const i = r[r.length-1]?.amount.search(" ");
  return (
    <div className='sexy'>
      <div className="description">
        {r.length > 0 && (r.map((r) => (
          <Content data={r}></Content>
        )))}
      </div>

    </div>
  )
}

export default Description
