import React from 'react';
import { useSelector } from 'react-redux';
const Footer = () => {
   const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className='w-full inset-x-0 bottom-0'>
      <div className={`${darkMode ? "bg-black" : "bg-white" }`}>
      <section className='md:px-28 md:pb-0'>
        <div className='flex flex-col items-center '>
          <div className='flex justify-center md:space-x-8'>
            <a href="https://www.facebook.com/NizamEducationWelfare" target="_blank"  className={`p-4  ${darkMode ? "text-white":"text-black"} rounded-lg hover:bg-gray-400 transition-colors duration-300`}>
              <i className={`text-3xl ${darkMode ? "text-white":"text-black"} opacity-90 fa-brands fa-facebook`}></i>
            </a>
            <a href="https://www.instagram.com/nizameducationwelfare" target="_blank"  className={`p-4  ${darkMode ? "text-white":"text-black"} rounded-lg hover:bg-gray-400 transition-colors duration-300`}>
              <i className={`text-3xl  ${darkMode ? "text-white":"text-black"} opacity-90 fa-brands fa-instagram`}></i>
            </a>
            <a href=""  className={`p-4  ${darkMode ? "text-white":"text-black"} rounded-lg hover:bg-gray-400 transition-colors duration-300`}>
              <i className={`text-3xl  ${darkMode ? "text-white":"text-black"} opacity-90 fa-brands fa-twitter`}></i>
            </a>
            <a href="https://www.tiktok.com/@nizam.education.welfare?_t=ZS-8tOSd7CTFTD&_r=1" target="_blank"  className={`p-4  ${darkMode ? "text-white":"text-black"} rounded-lg hover:bg-gray-400 transition-colors duration-300`}>
            <i className={`text-3xl ${darkMode ? "text-white":"text-black"} opacity-90 fa-brands fa-tiktok`}></i>
            </a>

          </div>
          <h2 className={`md:text-xl text-lg  font-bold text-center ${darkMode ? "text-white":"text-black"}`}>
          Copyright &copy; 2025 to Nizam Education Welfare (NEW)
          </h2>
        </div>
      </section>      
      </div>
    </div>
  );
}

export default Footer;
