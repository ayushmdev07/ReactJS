import React from 'react'
import axios from "axios";
import { useState } from 'react';

const App = () => {

  // async function getdata(){
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users")    
  //   const data = await response.json();
  //   console.log(data);
  // }

  const [data, setData] = useState([])
  async function getdata(){
    const response = await axios.get("https://picsum.photos/v2/list")

    setData(response.data);

    
    
    
  }


  return (
    <div>
      <button onClick={getdata}>Get data</button>
      {data.map(function(elem,idx){
        return <h4>Hello, {idx}, {elem.author}</h4>
      })}
    </div>
  )
}

export default App