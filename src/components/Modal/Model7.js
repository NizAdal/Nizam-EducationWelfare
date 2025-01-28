import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { X, Upload } from 'lucide-react';
import { account, bucket, databases } from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
function Model7({ onCancel }) {
   const navigate = useNavigate()

  const logout = async () =>{
    try{
      const yoyo = await account.deleteSession("current");
      navigate("/")
      console.log('Logged out', yoyo);
      onCancel()
    } catch(e) {
      console.log('Logout error', e);
      onCancel()
    }
  }

  const ModelRef = useRef();

  const handleButton = (event) => {
    event.stopPropagation();
    onCancel();
  };

  const close = (e) => {
    if (ModelRef.current === e.target) {
      handleButton(e);
    }
  };

  return (
    <div ref={ModelRef} onClick={close} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='md:mt-10 flex flex-col gap-5 text-white'>
        <button onClick={handleButton} className='place-self-end'><X size={30} /></button>
        <div className='bg-green-600 rounded-xl  md:px-20 py-8 md:py-10 flex flex-col gap-5 items-center md:mx-4 w-80 md:w-auto'>
          <h1 className='md:text-3xl text-xl font-bold  md:font-extrabold'>Are sure you want to logout</h1>
          <div className='flex flex-row items-center justify-between gap-5 '>
            <button onClick={logout} className="mt-3 text-center px-12  md:px-16  bg-gray-300 text-black py-2 rounded-lg font-semibold hover:bg-white focus:scale-95 transition-all duration-200 ease-out">Yes</button>
            <button onClick={handleButton} className='mt-3 text-center px-12  md:px-16  bg-gray-300 text-black py-2 rounded-lg font-semibold hover:bg-white focus:scale-95 transition-all duration-200 ease-out'>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model7;
