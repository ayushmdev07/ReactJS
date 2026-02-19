import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {



  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(0)
  // useEffect(function(){
  //   console.log("Use Efect Running ,...");

  // },[num,num2])


  // [] ek baar chalega only 
  // [dependencies] - jab jab uska state change hoga



  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function changeA() {
    console.log("A is changed");

  }
  function changeB() {
    console.log("B is changed");

  }


  useEffect(function(){
    console.log("Use Effect ");
    changeA()
  },[a])




  return (
    // <div>
    //   <button onClick={function temp(){
    //     setNum(num+1)
    //   }}
    //   >Click Me</button>
    //         <button onClick={function temp(){
    //     setNum2(num2-1)
    //   }}
    //   >Click Me</button>
    //   {num}, {num2}
    // </div>



    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>

      <button onClick={
        function temp() {
          setA(a + 1)
        }
      }>Change A</button>
      <button onClick={
        function temp() {
          setB(b - 1)
        }

      }>Change B</button>
    </div>
  )
}

export default App