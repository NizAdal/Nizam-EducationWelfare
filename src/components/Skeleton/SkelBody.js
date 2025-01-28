import { div } from "framer-motion/client";
import React from "react";


const SkelBody = () => {
    return (
        <div className="md:ml-[8.45rem] px-6 ">
        <div className='mt-3 h-96  space-y-4 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] md:w-72  w-full  bg-slate-400 animate-pulse'>         
        <div className='w-full h-44 bg-slate-800 rounded-lg mb-12 p-2'>          
            <div className='w-40 h-40 md:ml-[4rem]  ml-[5.5rem] bg-slate-500   rounded-full '></div></div>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <div className='w-52 h-6 bg-slate-500 rounded-lg mt-2 mb-3'></div>
            <div className='w-52 h-4 bg-slate-500 rounded-lg mt-2'></div>
            <div className='w-56 h-4 bg-slate-500 rounded-lg mt-2'></div>
          </div>
        </div>
        </div>
      );
    }



export default SkelBody;