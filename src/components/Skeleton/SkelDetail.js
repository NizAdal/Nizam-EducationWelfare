import React from "react";

const SkelDetails = () => {
  
    return (
      <div className='space-y-4 px-6 flex flex-col  rounded-xl  bg-slate-400 animate-pulse'>
          <div className='md:w-3/5 h-10 md:mx-44  lg:mx-52 md:mt-10 mt-4 lg:mt-16  bg-slate-500 rounded-lg'></div>
          <div className="flex md:flex-row flex-col items-center md:gap-12 justify-center mt-5">
          <div className='lg:w-2/5 md:w-3/5 w-full h-64  md:h-[20rem]  lg:h-[30rem] md:mb-5 md:ml-6  bg-slate-500 rounded-lg mt-5'></div>
          <div className='w-3/5 h-96 bg-slate-400 rounded-lg md:mt-5'>
            <div className="flex flex-col   items-center justify-center gap-5">
            <div className='md:w-4/5 w-64  md:h-5  mx-52 mt-20  bg-slate-500 rounded-lg'></div>
            <div className='md:w-4/5 w-64  h-5 mx-52   bg-slate-500 rounded-lg'></div>
            <div className='md:w-4/5 w-60  h-5 mx-52   bg-slate-500 rounded-lg'></div>
            <div className='md:w-4/5 w-full  h-5 mx-52   bg-slate-500 rounded-lg'></div>
            </div>
          </div>
        </div>
        </div>
      );
    }
export default SkelDetails;