// PostDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SkelDetails from '../Skeleton/SkelDetail';
function PostDetails() {
  const location = useLocation();
  const {id, title, desc, imgurl} = location.state || {};
  const isLoading = !id;

  if (isLoading) {
    return (
      <div className='lg:mt-16 md:mt-48   mx-11 lg:mb-12 mt-12 '>
        <SkelDetails />
      </div>
    );
  }

  return (
 <>  
        
  <div className='mt-[50px] lg:mt-[30px] mb-[10px]  md:mt-[90px]'>
    <h2 className='leading-relaxed antialiased md:text-5xl text-2xl md:px-auto  px-2  justify-center font-extrabold text-gray-800 text-center drop-shadow-lg'>
    {title}
  </h2>
</div>
<div className='m-auto mt-5 shadow-custom-green w-3/6'></div>

<div className='grid md:grid-cols-2 grid-rows-1  pt-0  md:pt-16'>
  <div className='md:mb-10 '>
      <img className='md:w-full w-4/5  md:mx-auto mx-9  rounded-lg object-contain h-[500px]' src={imgurl} alt="Image" />
  </div>
  <div className='flex justify-center items-center'>
    <p className='text-black w-[80%] mb-5 leading-relaxed antialiased'>
      {desc}
    </p>
  </div>
</div>

  </>
  );
}

export default PostDetails;
