import React, { useState } from 'react';
import Model from '../Modal/Model';
import Model2 from '../Modal/Model2';
import Model3 from '../Modal/Model3';
import Model4 from '../Modal/Model4';
import Model5 from '../Modal/Model5';
import Model7 from '../Modal/Model7';

function Dashboard() {
  const images = ['/pic/logo.jpg'];
  const [showModel, setshowModel] = useState(false);
  const [showModel2, setshowModel2] = useState(false);
  const [showModel3, setshowModel3] = useState(false);
  const [showModel4, setshowModel4] = useState(false);
  const [showModel5, setshowModel5] = useState(false);
  const [showModel7, setshowModel7] = useState(false);

  const handleCancel = () => {
    setshowModel(false);
    setshowModel2(false);
    setshowModel3(false);
    setshowModel4(false);
    setshowModel5(false);
    setshowModel7(false);
  };

  const backgroundStyleLg = {
    backgroundImage: `url(${images[0]})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center'
  };

  const backgroundStyleMd = {
    backgroundImage: `url(${images[0]})`,
    backgroundSize: 'auto 65%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center'
  };

  const backgroundStyleSm = {
    backgroundImage: `url(${images[0]})`,
    backgroundSize: 'auto 60%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  };

  const backgroundStyleSmbelow = {
    backgroundImage: `url(${images[0]})`,
    backgroundSize: 'auto 50%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  };

  const getBackgroundStyle = () => {
    if (window.innerWidth >= 1024) {
      return backgroundStyleLg;
    } else if (window.innerWidth >= 768) {
      return backgroundStyleMd;
    } else if (window.innerWidth >= 640) {
      return backgroundStyleSm;
    } else {
      return backgroundStyleSmbelow;
    }
  };

  return (
    <div className="lg:pt-12 md:pt-24 pt-12 flex flex-col items-center" style={getBackgroundStyle()}>
      <div className="pb-4 sm:px-5 md:px-3 xl:px-[8rem] lg:px-24  2xl:px-32 grid md:grid-rows-2 grid-cols-2 pt-9 lg:gap-y-44 md:gap-y-24 gap-y-12 lg:gap-x-60 2xl:gap-x-[30rem] md:gap-x-[9.5rem] sm:gap-x-20 gap-x-16 w-full">
        <div onClick={() => setshowModel(true)} className="border-4 hover:border-gray-500 border-amber-100 bg-slate-300 rounded-lg shadow-lg md:h-44 sm:h-28 h-20 lg:w-96 md:w-80 sm:w-32 cursor-pointer overflow-hidden">
          <div className="hover:transform hover:translate-x-3 transition-transform duration-300 inline-block text-left md:pl-8 pl-2 md:pt-10 sm:pt-6 pt-4 md:text-4xl sm:text-xl font-bold">Body <span className='bg-slate-300 '>&gt;&gt;</span></div>
          {showModel && <Model onCancel={handleCancel}/>}
        </div>

        <div onClick={() => setshowModel2(true)} className="border-4 hover:border-gray-500 border-amber-100 bg-slate-300 rounded-lg shadow-lg md:h-44 sm:h-28 h-20 lg:w-96 md:w-80 sm:w-32 cursor-pointer overflow-hidden">
          <div className="hover:transform hover:translate-x-3 transition-transform duration-300 inline-block text-left md:pl-8 pl-2 md:pt-10 sm:pt-6 pt-4 md:text-4xl sm:text-xl font-bold">Front Post <span className='bg-slate-300 '>&gt;&gt;</span></div>
          {showModel2 && <Model2 onCancel={handleCancel}/>}
        </div>

        <div onClick={() => setshowModel3(true)} className="border-4 hover:border-gray-500 border-amber-100 bg-slate-300 rounded-lg shadow-lg md:h-44 sm:h-28 h-20 lg:w-96 md:w-80 sm:w-32 cursor-pointer overflow-hidden">
          <div className="hover:transform hover:translate-x-3 transition-transform duration-300 inline-block text-left md:pl-8 pl-2 md:pt-10 sm:pt-6 pt-4 md:text-4xl sm:text-xl font-bold">Post <span className='bg-slate-300 '>&gt;&gt;</span></div>
          {showModel3 && <Model3 onCancel={handleCancel}/>}
        </div>

        <div onClick={() => setshowModel4(true)} className="border-4 hover:border-gray-500 border-amber-100 bg-slate-300 rounded-lg shadow-lg md:h-44 sm:h-28 h-20 lg:w-96 md:w-80 sm:w-32 cursor-pointer overflow-hidden">
          <div className="hover:transform hover:translate-x-3 transition-transform duration-300 inline-block text-left md:pl-8 pl-2 md:pt-10 sm:pt-6 pt-4 md:text-4xl sm:text-xl font-bold">Members<span className='bg-slate-300 '>&gt;&gt;</span></div>
          {showModel4 && <Model4 onCancel={handleCancel}/>}
        </div>

        <div onClick={() => setshowModel5(true)} className="border-4 hover:border-gray-500 border-amber-100 bg-slate-300 rounded-lg shadow-lg md:h-44 sm:h-28 h-20 lg:w-96 md:w-80 sm:w-32 cursor-pointer overflow-hidden">
          <div className="hover:transform hover:translate-x-3 transition-transform duration-300 inline-block text-left md:pl-8 pl-2 md:pt-10 sm:pt-6 pt-4 md:text-4xl sm:text-xl font-bold">Notes<span className='bg-slate-300 '>&gt;&gt;</span></div>
          {showModel5 && <Model5 onCancel={handleCancel}/>}
        </div>

        <div onClick={() => setshowModel7(true)} className="border-4 hover:border-gray-500 border-amber-100 bg-slate-300 rounded-lg shadow-lg md:h-44 sm:h-28 h-20 lg:w-96 md:w-80 sm:w-32 cursor-pointer overflow-hidden">
          <div className="hover:transform hover:translate-x-3 transition-transform duration-300 inline-block text-left md:pl-8 pl-2 md:pt-10 sm:pt-6 pt-4 md:text-4xl sm:text-xl font-bold">LogOut &gt;&gt;</div>
          {showModel7 && <Model7 onCancel={handleCancel}/>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
