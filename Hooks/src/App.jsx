import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increase() {
    setnum(num+1)
  }
  function decrease() {
    setnum(num-1)
  }
  return (
    <>
      <div className="main">
        <div className="main2">

        <h1>Counter</h1>
        <h2>{num}</h2>
        <div className='dv'>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decerse</button>
        </div>
          
        </div>

      </div>
    </>
  )
}

export default App