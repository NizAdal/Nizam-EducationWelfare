import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Step3({file,congract}) {
  const navigate = useNavigate()
  const HomeClick= () => ( navigate( "/" ))
  
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
        <div className='text-green-400'>
          <svg className='w-24 h-24' fill='currentColor' viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 
            10.586 7.707 9.293a1 1 0 00-1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule="evenodd" />
          </svg>
        </div>
        <div className='mt-3 text-xl font-semibold uppercase text-green-500'>
          {congract}
        </div>
        <div className='text-lg font-semibold text-gray-500'>
         {file} 
        </div>
        <div className='mt-10' href='/'>
          <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out' onClick={HomeClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
