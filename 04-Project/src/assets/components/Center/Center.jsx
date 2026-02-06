import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'

const Center = (props) => {
  

  return (
    <div className='flex px-10 py-10 justify-between gap-5 h-[90vh]'>
        <CenterLeft />
        <CenterRight users={props.users} />
    </div>
  )
}

export default Center