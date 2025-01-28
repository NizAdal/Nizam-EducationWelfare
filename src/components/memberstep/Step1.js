import { useContext, useState } from "react"
import React  from 'react'
import {StepperContext} from "../context/StepperContext";

export default function Step1({grid,firstN, secondN,email,dep,year,dist,wid,mig}) {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e)=>{
        const {name,value}= e.target;
        setUserData({ ...userData, [name]: value});
        console.log('Updated userData:', { ...userData, [name]: value });

    };


    
  return (
    <div>
    <div className= {`${grid}`}  >
        <input type="text" placeholder={firstN} name='firstN' className={`border border-gray-400 py-1 px-2 ${wid}`} onChange={handleChange} required/>
        <input type="text" placeholder={secondN} name='secondN'  className= {`border border-gray-400 py-1 px-2 ${mig} ${wid}`} onChange={handleChange}/>
    </div>
    <div className='mt-5'>
        <input type="email" placeholder={email} name='email'  className='border border-gray-400 py-1 px-2 w-full' required onChange={handleChange}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
    </div>
    <div className='mt-5'>
        <input type="text" placeholder={dep} name='dep'  className='border border-gray-400 py-1 px-2 w-full'onChange={handleChange}  required/>
    </div>
    <div className='mt-5'>
        <input type="text" placeholder={year} name='year'  className='border border-gray-400 py-1 px-2 w-full' onChange={handleChange}  required/>
    </div>
    <div className='mt-5'>
        <input type="text" placeholder={dist} name='dist'  className='border border-gray-400 py-1 px-2 w-full' onChange={handleChange}  required />
    </div>
    </div>
  )
}
