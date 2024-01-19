import React from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from "../assets/WH_logo.png";
import EmployeeTable from '../components/EmployeeTable';
import Header from '../components/Header';

export default function EmployeeList() {
  return (
    <>
      <Header />
      <EmployeeTable />  
    </>
  )
}
