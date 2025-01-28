import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Memberdrop from './Memberdrop';
import Notes from './Notes';
import Search from './Search';
import Hamburger from '../Hamburger';

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };
  const darkMode = useSelector((state) => state.darkMode);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div  className='shadow-md w-full fixed top-0 left-0 '>
      <div className={`md:flex items-center justify-between ${darkMode ? "bg-black border-b" : "bg-white"} py-4 md:px-10 px-7`}>
        <div className='flex md:hidden font-bold md:text-2xl text-lg  cursor-pointer items-center text-gray-800 flex-grow md:flex-grow-0'>
          <NavLink to="/">Nizam Education<br/> Welfare (NEW)</NavLink>
        </div>
        <div className={`hidden md:flex font-bold text-2xl cursor-pointer items-center  ${darkMode ? "text-white" : "text-gray-800"}  flex-grow md:flex-grow-0`}>
          <NavLink to="/">Nizam Education Welfare (NEW)</NavLink>
        </div>
        <div onClick={toggleHamburger} className='mt-2 absolute right-8 top-6 cursor-pointer md:hidden'>
          <Hamburger />
        </div>
        <div className='hidden md:flex flex-grow justify-center'>
          <ul className={`md:flex md:items-center space-x-8`}>
            {isLoggedIn && (
              <li className={`text-xl cursor-pointer text-gray-800 hover:text-gray-400 duration-500`}>
                <NavLink to="/dashboard" className={({ isActive }) => 
              isActive ? darkMode ? 'text-white' : 'text-green-900': darkMode ? 'text-gray-500  hover:text-white' : 'text-gray-500 hover:text-black'}>Dashboard</NavLink>
              </li>
            )}
            <li className={`text-xl cursor-pointer text-gray-800 hover:text-gray-400 duration-500`}>
              <NavLink to="/" className={({ isActive }) => 
              isActive ? darkMode ? 'text-white' : 'text-green-900': darkMode ? 'text-gray-500  hover:text-white' : 'text-gray-500 hover:text-black'}
              >Home
             </NavLink>
             </li>
            <li className='text-xl cursor-pointer text-gray-800 hover:text-gray-400 duration-500'>
              <NavLink to="/posts" className={({ isActive }) => 
              isActive ? darkMode ? 'text-white' : 'text-green-900': darkMode ? 'text-gray-500  hover:text-white' : 'text-gray-500 hover:text-black'}> Posts </NavLink></li>
            
            
            <li className={`text-xl cursor-pointer text-gray-500  ${darkMode ? 'hover:text-white' : 'hover:text-black'} duration-500`}>
              <Memberdrop />
            </li>
            <li className={`text-xl cursor-pointer text-gray-500  ${darkMode ? 'hover:text-white' : 'hover:text-black'} duration-500`}>
              <Notes />
            </li>
          </ul>
        </div>
        <div className='hidden md:flex md:flex-grow-0'>
          <Search />
        </div>
        {/* Mobile */}
        <ul className={`md:hidden md:items-center delay-700 mb:pb-0 pb-3 pt-3 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {isLoggedIn && (
            <li className='md:ml-8 text-xl cursor-pointer md:my-0 my-7 md:px-0 text-gray-800 hover:text-gray-400 duration-500'>
              <NavLink to="/dashboard" className={({ isActive }) =>
                !isActive ? 'text-gray-500  hover:text-black' : 'text-green-900'
              }>Dashboard</NavLink>
            </li>
          )}
          <li    className='md:ml-8 text-xl cursor-pointer md:my-0 my-7 md:px-0 text-gray-800 hover:text-gray-400 duration-500'>
            <NavLink to="/"  className={({ isActive }) =>
              !isActive ? 'text-gray-500  hover:text-black' : 'text-green-900'
            }>Home</NavLink>
          </li>
          <li  className='md:ml-8 text-xl cursor-pointer md:px-0 md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
            <NavLink to="/posts" className={({ isActive }) =>
              !isActive ? 'text-gray-500 hover:text-black' : 'text-green-900 '
            }> Posts </NavLink></li>
          <li className='md:ml-8 text-xl md:my-0 my-7 md:px-0 text-gray-800 hover:text-gray-400 duration-500'>
            <Memberdrop/>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7 md:px-0 text-gray-800 hover:text-gray-400 duration-500'>
            <Notes/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
