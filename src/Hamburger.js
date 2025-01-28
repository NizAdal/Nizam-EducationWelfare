import React, { useState } from 'react';
const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleHamburger = () => {
      setIsActive(!isActive);
    };
   
  return (
    <>
   <div onClick={toggleHamburger} className={`flex flex-col w-[32px] h-[25px] space-y-2 cursor-pointer ${isActive ? 'hamburger' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
    </div>
    </>
  )
}

export default Hamburger