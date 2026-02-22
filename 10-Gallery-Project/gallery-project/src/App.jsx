import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {
  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)
  async function getData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    console.log(response.data);
    setUserdata(response.data)

  }


  useEffect(function(){
    getData()
  },[index])


  let printUserData = <h3 className='text-gray-400 font-semibold'>No User Avilable</h3>

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return <div key={idx} className=' mb-2'>
        <a href={elem.url} target='new'>
          <div className='h-60  rounded-2xl border border-white overflow-hidden'>
            <img className='h-full object-cover  ' src={elem.download_url} alt="" /></div>
          <h2 className='text-lg text-center font-bold '>{elem.author}</h2>
        </a>
      </div>

    })
  }

  return (
    <div className=' bg-black text-white min-h-screen p-5 overflow-auto'>

      <div className='flex flex-wrap gap-3 justify-center py-2'>{printUserData}
      </div>
      <div className='flex gap-5 justify-center items-center p-4'>
        <button className='bg-amber-400 font-semibold  text-white py-2 px-5 rounded active:scale-95'
        onClick={
          () => {
                      if(index>1)
            setIndex(index-1)
          }
        }
        >Prev</button>
        <p>Page {index}</p>
        <button className='bg-amber-400 font-semibold  text-white py-2 px-5 rounded active:scale-95'
        onClick={
                    () => {
                        setIndex(index+1)
                      
        }}
        >Next</button>
      </div>
    </div>
  )
}

export default App