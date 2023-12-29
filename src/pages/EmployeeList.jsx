import React from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from "../assets/WH_logo.png";
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeeList() {
  return (
    <>
      <header className='bg-emerald-50 p-2'>
        <Link to='/' className='flex flex-row gap-3 items-center justify-center'>
          <img  width="50" height="50" src={ImgLogo} alt="Logo HRNet" />
          <p> HRNet</p>          
        </Link>
      </header>
      <EmployeeTable />  
    </>
  )
}
