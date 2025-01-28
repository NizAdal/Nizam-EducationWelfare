import { useContext, useState } from "react"
import React  from 'react'
import {StepperContext} from "../context/StepperContext";



export default function Step2({address,reason,image, ac}) {
      const { userData, setUserData } = useContext(StepperContext);
      const [imgpreview, setimgpreview] = useState(null)
      const handleChange = (e)=>{
        const { name, value, files } = e.target;
          setUserData({ ...userData,
             [name]: files ? files[0] :value});
          
       if (name === 'img' && files){
        setimgpreview(URL.createObjectURL(files[0]));
       }      
    };
  return (
    <div>
    <div className='mt-5'>
        <input type="text" placeholder={address} name='address' className='border border-gray-400 py-1 px-2 w-full' required onChange={handleChange}/>
    </div>
    <div className='mt-5'>
        <textarea type="text" placeholder={reason} name='reason'  className='border border-gray-400 py-1 px-2 w-full h-20' required onChange={handleChange}/>
    </div>
    <div className='mt-5 flex flex-col space-x-0 '>
      <input type="file" accept={ac} name='img' className='border-2 border-gray-400 w-full border-none' required onChange={handleChange} />
      {imgpreview && (
      <img src={imgpreview} alt="" className="mt-2 max-h-40 max-w-20" />
    )}
      <span className='bg-white'>Upload Your {image} </span>
  </div>
    </div>
  )
}
