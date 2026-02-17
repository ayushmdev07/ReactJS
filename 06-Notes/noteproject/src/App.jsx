import React, { useState } from 'react'
import bgImage from "./assets/Back.png";


const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  function SubmitHandler(e) {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask);

    setTitle("");
    setDetails("");
  }

  function deleteNote(index) {
    const copyTask = [...task]

    copyTask.splice(index,1);
    setTask(copyTask);
    

  }

  return (
    <div className='md:h-screen min-h-screen bg-black text-white md:p-10 md:flex'>
      <div className='md:w-1/2  md:h-full'>
        <form onSubmit={
          function go(e) {
            SubmitHandler(e);
          }
        } className='py-5 px-5 md:px-10 flex flex-col gap-5'>
          <h1 className='font-bold text-4xl'>Add Notes</h1>
          <input
            value={title}
            onChange={
              function first(e) {
                setTitle(e.target.value)
              }
            }
            className='outline-none border rounded h-10 w-full p-4 text-xl py-5' placeholder='Enter Notes Heading' type="text" />
          <textarea
            value={details}
            onChange={
              function second(e) {
                setDetails(e.target.value)
              }
            }
            className='outline-none border rounded h-30 w-full p-4 text-xl' placeholder='Write Details' />
          <button className='bg-white text-black p-2 w-full rounded active:bg-gray-200 active:scale-95 hover:cursor-pointer font-bold'>Add Note</button>
        </form>
      </div>
      <div className=' flow py-5 px-5 md:px-8 md:border-s-2 overflow-y-scroll md:h-full md:w-1/2 bg'>
        <div className=' md:flex flex-col gap-5'>

          <h1 className='font-bold text-4xl'>Recent Notes</h1>
          <div className=' mt-5 flex flex-wrap gap-5 justify-start'>

            {task.map(function (elem, idx) {
              return <div key={idx} className=' flex justify-between flex-col items-start bgcustom h-60 w-40 md:w-50 rounded-2xl p-4 pb-7  bg-cover bg-no-repeatt bg-center'>

                <div>

                  <h3 className=' text-black font-bold text-2xl leading-tight mt-8'>{elem.title}</h3>
                  <p className='mt-3 text-gray-700'>{elem.details}</p>
                </div>
                <button onClick={
                  function DeleteCustom(){
                    deleteNote(idx)

                  }
                } className='w-full cursor-pointer active:scale-95 bg-red-500 rounded py-1 font-bold'>Delete</button>

              </div>
            })}



          </div>
        </div>
      </div>
    </div>
  )
}

export default App