import React from 'react'

const App = () => {
  function print(a, b) {
    console.log(a + b);
  }
  return (
    <>
      <div onMouseMove={
        function A(a) {
          console.log(a.clientX,a.clientY);
        }
      }></div>
      <button onClick={function add() {print(2, 5);}}>Click me</button>
    </>

  )
}

export default App