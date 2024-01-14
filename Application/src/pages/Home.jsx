import React from 'react'
import ImgLogo from "../assets/WH_logo.png";
import { Link } from 'react-router-dom';
import { HRnetForm } from '../components/HRnetForm.jsx';

export default function Home() {
  return (
    <>
      <header className=' bg-green-100 p-2'>
        <Link to='/' className='flex flex-row gap-3 items-center justify-center'>
          <img  width="50" height="50" src={ImgLogo} alt="Logo HRNet" />
          <h1 className='text-xl font-bold' > HRNet</h1>
        </Link>    
      </header>
      <section className='flex flex-col gap-6 m-3'> 
        <div className='flex flex-row bg-green-100 justify-between p-4'>
          <h2 className='text-lg font-semibold'>Create Employee</h2>
          <Link to='/EmployeeList' className='text-lg font-semibold underline underline-offset-4'>View Current Employees</Link>
        </div>
        <HRnetForm />
      </section>
    </>
  )
}