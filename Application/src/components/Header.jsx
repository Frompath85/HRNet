import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className=' bg-green-100 p-2'>
    <NavLink to='/' className='flex flex-row gap-3 items-center justify-center'>
      <img  width="50" height="50" src="./src/assets/WH_logo.webp" alt="Logo HRNet" />
      <h1 className='text-xl font-bold' > HRNet</h1>
    </NavLink>    
   </header>
  )
}
