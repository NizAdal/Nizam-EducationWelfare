import React from "react";

const SkelPost = () => {
  return (
    <>
    
        {Array(1).fill().map((_, idx) => (
          <div key={idx}>
            <div className='mb-0 flex flex-col justify-center items-center md:h-96'>
              <div className='w-4/5  h-[250px] md:w-3/5 md:h-4/5 bg-slate-400 animate-pulse rounded-lg'></div>
            </div>
              <div className="w-28 ml-[3rem] mt-5  md:mt-auto  md:ml-[10.5rem]  lg:ml-[16.5rem] 2xl:ml-[20rem]">
              <div className='flex flex-col'>
                <span className='bg-slate-400  bold h-8 w-[10rem]  md:w-[24rem]  block mb-2 animate-pulse'></span>
                <div className='bg-slate-400 h-6 w-[18rem]  md:w-[32rem]  lg:w-[48rem]  animate-pulse rounded-md mt-2'></div>
                <div className='bg-slate-400 h-6 md:w-[32rem]  w-[18rem] animate-pulse rounded-md mt-2'></div>
                <div className='bg-slate-400 h-6 md:w-[32rem]  w-[18rem] animate-pulse rounded-md mt-2'></div>
                <div className='bg-slate-400 h-6 md:w-[32rem]  w-[18rem] animate-pulse rounded-md mt-2'></div>
                <div className='bg-slate-400 h-6 w-[8rem] animate-pulse rounded-md mt-2'></div>
            </div>
            </div>
          </div>
        ))}

    </>
  );
}

export default SkelPost;
