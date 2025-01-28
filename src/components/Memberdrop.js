import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Memberdrop = () => {
 const darkMode = useSelector((state) => state.darkMode);
  const location = useLocation(); // Call useLocation here
  const isActive = location.pathname === '/bemember' || location.pathname === '/memberdetail'; // Check if the path is /bemember or /memberdetail

  return (
    <ul className='dropdown'>
      <div>
        {/* Pass isActive prop to FlyoutLink */}
        <FlyoutLink href="#" FlyoutContent={MemberContent} isActive={isActive} darkMode={darkMode}>Members</FlyoutLink>
      </div>
    </ul>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, isActive, darkMode }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit'
    >
      {/* Conditionally apply active styles */}
      <a href={href} className={`relative ${!isActive ?   ( darkMode? 'text-gray-500 hover:text-white' :'text-gray-500 hover:text-black')  : (darkMode ? 'text-white hover:text-white' : 'text-green-900 hover:text-black')}`}>
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out'
        />
      </a>

      {/* Display the dropdown when hovered */}
      {showFlyout && (
        <div className='absolute md:left-1/2 left-[218px] md:top-12 -top-8  -translate-x-1/2  md:bg-white  text-black '>
          <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
          <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
          <FlyoutContent />
        </div>
      )}
    </div>
  );
};

const MemberContent = () => {
  return (
    <div className='w-64 h-24 bg-white p-6 shadow-xl'>
      <div className='mb-3 space-y-3'>
        <a href='#' className='block font-semibold text-sm hover:underline'>
          <h3 className='font-semibold text-center'>
            <NavLink
              to='/bemember'
              className={({ isActive }) => (!isActive ? 'text-gray-500  hover:text-black' : 'text-green-900')}
            >
              Be Our Member
            </NavLink>
          </h3>
        </a>
      </div>

      <div className='mb-3 space-y-3'>
        <a href='#' className='block text-sm hover:underline'>
          <h3 className='font-semibold text-center'>
            <NavLink
              to='/memberdetail'
              className={({ isActive }) => (!isActive ? 'text-gray-500  hover:text-black' : 'text-green-900')}
            >
              Member's Detail 
            </NavLink>
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Memberdrop;
