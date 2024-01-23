import React from 'react'
import { useState } from 'react'
import { useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AddEmploys } from '../features/dataReducer'
import states from '../../data/States.json'
import {ModaleHRnet} from 'modale-hrnet-frompath'



export const HRnetForm = () => {
    const [openModal, setOpenModal] = useState(false )

    const dispatch = useDispatch()    
    const data = useSelector(state => state.data)
    // console.log(data)

    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form 
    const {errors} = formState
	
    // calcul d'age
    const CalculateAge = (dob) => {
        const BirthDate = new Date(dob)
        const DateDiffMs = Date.now() - BirthDate.getTime()
        const ageYear = new Date(DateDiffMs)
        return Math.abs(ageYear.getUTCFullYear() - 1970);
    }
    // valider l'age ou envoyer le message d'erreur a l'utilisateur
    const validateBirthDate = (value) => {
        const age = CalculateAge(value)
        return age >= 16 || "Age must be at least 16"
    }
    // vérifier que la date de début doit être après 16 ans
    const validateStartDate = (value) =>{
        const today = Date.now()// en Ms
        const start = new Date(value).getTime()// en Ms
        const birth = new Date(birthdate.value).getTime() + 504835200000 // ajouter 16 ans en Ms
        if ( !(birth && start <= today && start > birth)){
            return "start date must be after the 16 year" 
        }  
    }
    // changer le format de la date en mm/dd/yyyy
    const changeFormat = (value) =>{
        const myarray = value.split("-")
        const year =myarray[0]
        const month =myarray[1]
        const day =myarray[2]   
        return `${month}/${day}/${year}`    
    }
    //enregistrer l'employée dans le store, afficher la modale et réinitialiser les champs
    const OnSubmit = (dataOneEmployee)=>{
        dataOneEmployee.birthdate = changeFormat(dataOneEmployee.birthdate)
        dataOneEmployee.startdate = changeFormat(dataOneEmployee.startdate)
        const arr = Object.assign(dataOneEmployee, {id : data.employs.length+1})
        dispatch(AddEmploys(arr))
        setOpenModal(true)
        reset()
    }

  return (
    <>
        <form onSubmit={handleSubmit(OnSubmit)} noValidate className='text-lg flex flex-col gap-3'>
            <div className='grid grid-cols-2 gap-2'>
                <label htmlFor="firstname">First Name</label>
                <div className='flex flex-col'>
                    <input {...register("firstname",{
                        required : "firstname is Required",
                        pattern : {
                            value : /^[a-zA-Z][a-zA-Z -]{2,}$/,
                            message :"Invalid firstname format",
                        }
                    })} type="text" id="firstname" 
                        className='border-2 border-emerald-600 rounded'/>
                <span className='text-rose-600'>{errors.firstname?.message}</span>
                </div>
              
                <label htmlFor="lastname">Last Name</label>
                <div className='flex flex-col'>
                    <input {...register("lastname",{
                        required : "lastname is Required",
                        pattern : {
                            value : /^[a-zA-Z][a-zA-Z -]{2,}$/,
                            message :"Invalid lastname format",
                        }
                    })} type="text" id="lastname" 
                        className='border-2 border-emerald-600 rounded'/>
                   <span className='text-rose-600'>{errors.lastname?.message}</span>
                </div>
                
                <label htmlFor="birthdate">Date of Birth</label>
                <div className='flex flex-col'>
                    <input {...register("birthdate",{
                        required : "Birth Date is Required",
                        validate: validateBirthDate,      
                    })} id="birthdate" type="date" className='border-2 border-emerald-600 rounded' />
                    <span className='text-rose-600'>{errors.birthdate?.message}</span>
                </div>
               
                <label htmlFor="startdate">Start Date</label>
                <div className='flex flex-col'>
                    <input {...register("startdate",{
                        required : "Start Date is Required",
                        validate: validateStartDate
                    })} id="startdate" type="date" className='border-2 border-emerald-600 rounded' />
                    <span className='text-rose-600'>{errors.startdate?.message}</span>
                </div>
               </div>
            <fieldset className='border-2 border-emerald-600 rounded'>
                <legend className='ml-2 p-2'>Address</legend>
                <div className='grid grid-cols-4 gap-2 p-2'>
                    <label htmlFor="street">Street</label>
                    <div className='flex flex-col'>
                        <input  {...register("street",{
                            required : "Street is Required",
                            pattern : {
                                value : /^[a-zA-Z][a-zA-Z -]{2,}$/,
                                message :"Invalid Street format",
                            },
                    })} id="street" type="text" className='border-2 border-emerald-600 rounded' />
                        <span className='text-rose-600'>{errors.street?.message}</span>
                    </div>
                    <label htmlFor="city">City</label>
                    <div className='flex flex-col'>
                        <input  {...register("city",{
                            required : "City is Required",
                            pattern : {
                                value : /^[a-zA-Z][a-zA-Z -]{2,}$/,
                                message :"Invalid City format",
                            },
                            })} id="city" type="text" className='border-2 border-emerald-600 rounded'/>
                        <span className='text-rose-600'>{errors.city?.message}</span>
                    </div>
                   
                    <label htmlFor="state">State</label>
                    <select  {...register("state")} id="state" className='border-2 border-emerald-600 rounded'>
                       {
                         states.map (state => <option key={state.abbreviation}>{state.name}  </option>)
                       }
                    </select>

                    <label htmlFor="zipcode">Zip Code</label>
                    <div className='flex flex-col'>
                        <input  {...register("zipcode",{
                            required : "ZipCode is Required",
                            pattern : {
                                value : /^[0-9]+$/,
                                message :"Invalid ZipCode format",
                            },
                            })} id="zipcode" type="number" className='border-2 border-emerald-600 rounded' />
                        <span className='text-rose-600'>{errors.zipcode?.message}</span>
                    </div>
                </div>
            </fieldset>
            <div>
                <label htmlFor="department" className='mr-6'>Department</label>
                <select  {...register("department")} id="department" className='border-2 border-emerald-600 rounded'>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </div> 
            <div className='flex justify-center mt-4'>
              <button type='submit' className='w-32 p-2 bg-green-100 border-2 border-emerald-600 rounded'>Save</button>
            </div> 
        </form>
        {openModal && <ModaleHRnet closeMoldal={setOpenModal} 
                                     textModal="Employee Created !"
                                     linkModal= "View Current Employees "
                                     linkTo="EmployeeList"/> }
    </>
  )
}
