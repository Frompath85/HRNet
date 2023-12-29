import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function ModaleCreated({closeMoldal}) {
  return (
    <div className='flex justify-center items-center '>
    <div className='bg-slate-100 opacity-80 w-screen h-screen fixed  top-0 right-0 '>  
    </div>
    <div className='relative -top-64 m-3 z-10 p-5 rounded-lg border shadow-lg bg-white w-2/5'> 
        <button className='absolute -top-2 -right-2 ' onClick={() => { closeMoldal(false)} }> 
          <FontAwesomeIcon className='w-8 h-8' icon={faCircleXmark} />
        </button>
        <p className='font-bold text-xl'> Employee Created !</p>
    </div>
    </div>
  )
}
