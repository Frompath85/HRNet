import React from 'react'
import { HRnetForm } from '../components/HRnetForm.jsx';
import { NavLink } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeTable.jsx';

export default function Home() {
  return (
    <>     
      <div className='mx-16 my-6 '>
        <div className='flex justify-between gap-6 mx-10 my-6 text-xl font-semibold'>
          <h2>Create Employee</h2>
          <NavLink to='/EmployeeTable' className='text-emerald-800 underline underline-offset-4'> View Current  Employees</NavLink>     
        </div>
        <HRnetForm />
      </div>
    </>
  )
}