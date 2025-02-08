// src/components/Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../carous/Carousel';
import Carous2 from '../carous/Carous2';
import SkelBody from '../Skeleton/SkelBody';

function Home() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white': 'bg-amber-100 text-black'}`}>
      <div className="flex flex-col  gap-20  md:gap-0">
        <div className="w-[60%] m-auto pt-11 ">
          <Carousel />
        </div>
       <div className='flex flex-col gap-5 '>
        <div className="mt-[0px] lg:mt-[150px] md:mt-[350px]">
          <h2 className="md:text-5xl text-3xl mx-2  mt-[300px] justify-center font-extrabold text-center drop-shadow-lg">
            Nizam Education Welfare (NEW)
          </h2>
        </div>
        <span className="m-auto md:mt-5 shadow-custom-green w-2/5"></span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-1 pt-16">
        <div className="mb-0">
          <img className="w-full rounded-lg object-contain h-[500px]" src="/pic/logo.jpg" alt="Logo" />
        </div>

        <div className="flex justify-center items-center">
          <p className="w-[80%] leading-relaxed antialiased">
            <span className={`${darkMode ? 'bg-black' : 'bg-amber-100'} bold text-2xl`}>Nizam Education Welfare (NEW)</span><br />
            Formed in May 2023 by students at the University of Sindh Jamshoro Hyderabad, Nizam Education Welfare (NEW) is dedicated to the well-being of students and the university community.<br />
            "Nizam" reflects our commitment to discipline, while "Welfare" emphasizes our focus on student and university welfare, and "Education" underscores our mission to promote academic excellence.

            Our goal is to foster a positive image of the University of Sindh and provide support to current and prospective students.<br /> We organize activities, workshops, and seminars to enhance learning and promote continuous improvement. Our commitment extends to all aspects of student life, addressing diverse needs from academic support to mental health awareness.
            <br />
            Nizam Education Welfare is a movement towards a brighter future, striving to make a lasting impact on education and welfare within the University of Sindh community.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-20">
        <Carous2 />
      </div>
    </div>
  );
}

export default Home;
