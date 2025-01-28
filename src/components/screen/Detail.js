import React from 'react'
import TanStackTable from '../TanStackTable'
import { useSelector } from 'react-redux'
function Detail() {
  const darkMode = useSelector((state) => state.darkMode)
  return (
    <div className='lg:w-full mt-8 md:mt-22 lg:mt-0' >
      <h2 className={`lg:text-5xl bold md:text-4xl  text-2xl  ${darkMode ? "text-white": "text-black"}  text-center mt-3 underline`}>Currently Working Members in <span className='text-xl/2 text-green-700' style={{ backgroundColor: 'transparent' }}>(NEW)</span> </h2>
      <div className='border-b'>
      <TanStackTable/>
      </div>
    </div>
  )
}

export default Detail
