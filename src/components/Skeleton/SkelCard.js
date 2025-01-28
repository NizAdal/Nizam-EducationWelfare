import React from 'react';

const SkelCard = () => (
  <div className="flex items-center px-4 sm:px-8 md:px-11 justify-center mt-16 mb-16 min-h-screen">
    <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg w-[88rem]">
      <div className="animate-pulse">
        <div className="h-8 ml-[22rem]   bg-gray-300 w-[40rem]  rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col h-96  bg-gray-400 items-center rounded-xl  justify-center p-3 ml-20  w-2/3">
              <div className='w-40 h-40   bg-slate-500 mb-2  rounded-full '></div>
              <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-10 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SkelCard;
