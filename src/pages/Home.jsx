import React from 'react'
import ImgLogo from "../assets/WH_logo.png";
import { Link } from 'react-router-dom';
import EmployeeList from './EmployeeList.jsx'
import { HRnetForm } from '../components/HRnetForm.jsx';

export default function Home() {
  return (
    <>
        <header className=' bg-emerald-50 p-2'>
          <Link to='/' className='flex flex-row gap-3 items-center justify-center'>
            <img  width="50" height="50" src={ImgLogo} alt="Logo HRNet" />
            <h1 > HRNet</h1>
          </Link>  
        </header>
        <section className='flex flex-col gap-6 m-3'>
          <div className='flex flex-row bg-green-200 justify-between p-4'>
            <h2>Create Employee</h2>
            <Link to='/EmployeeList'>View Current Employees</Link>
          </div>
          <HRnetForm />
      </section>
    </>
  )
}
