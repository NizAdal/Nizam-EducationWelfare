// src/components/Search.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {toggleDarkMode} from '../redux/darkModeSlice'
import { Moon, Sun } from 'lucide-react';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the CSS file

const Search = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
    document.body.classList.toggle('dark', !darkMode); // Add or remove 'dark' class on body
  };

  return (
    <button
      onClick={handleToggle}
      className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg lg:w-40 md:w-28 ml-5  h-9 transition-colors  duration-300`}
    >
      {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default Search;
