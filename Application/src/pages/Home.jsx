import React from 'react'
import { HRnetForm } from '../components/HRnetForm.jsx';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header.jsx';

export default function Home() {
  return (
    <> 
      <Header />
      <div className='flex justify-between gap-6 ml-10 mr-10 mt-6 text-lg font-semibold'>
        <h2>Create Employee</h2>
        <NavLink to='/EmployeeList' className='underline underline-offset-4'> View current  Employees</NavLink>     
      </div>
      <HRnetForm />
    </>
  )
}