import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trash2 } from 'lucide-react';
import { databases, bucket } from "../../appwrite/config";
import { useSelector } from 'react-redux';
import SkelBody from '../Skeleton/SkelBody';
import { div } from 'framer-motion/client'; 
// install : npm install react-slick --save
// npm install slick-carousel --save

function Carous2() {
  const [maqsood, setmaqsood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 const darkMode = useSelector((state) => state.darkMode);
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true ,
    responsive: [
      {
        breakpoint: 1024, // Tablet and up
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {                               
        breakpoint: 768, // Mobile landscape and up
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // Mobile portrait and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const cachedData = localStorage.getItem('maqsood');
    if (cachedData) {
      setmaqsood(JSON.parse(cachedData));
    } else {
      view();
    }
  }, []);

  const view = async () => {
    try {
      const x = await databases.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID, []);
      setmaqsood(x.documents);
      setIsLoading(false);
      localStorage.setItem('alltodo', JSON.stringify(x.documents));
    } catch (e) {
      console.error("Error fetching data: ", e);
      // alert("Failed to fetch data. Please try again later.");
    }
  }
  const del = async (id, imgId) => {
    try {
      await databases.deleteDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID, id);
      await bucket.deleteFile(process.env.REACT_APP_BUCKET_ID, imgId);
      setmaqsood(maqsood.filter(doc => doc.$id !== id));
    } catch (e) {
      console.log(e);
    }
  }

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <div className='flex-wrap'>
        <div>
          <h2 className={`md:text-5xl text-3xl  font-extrabold ${darkMode ? 'text-white' : 'text-gray-800'} text-center drop-shadow-lg`}>
             Managing Body
          </h2>
        </div>
        <div className={`m-auto mt-5 ${darkMode ? 'shadow-custom-white': "shadow-custom-green"} w-3/6`}></div>
        <div className='md:w-4/5 border-b  sm:[min-w-full] m-auto'>
          <div className='mt-20'>
            {isLoading ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-0 md:gap-10  pb-10 mt-10'>
                {Array(3).fill().map((_, idx) => (
                  <SkelBody key={idx} />
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {maqsood.map((d) => (
                  
                  <div key={d.no} className='bg-white h-[450px] text-black rounded-xl ml-10 mr-10'>
                    <div className='h-56 rounded-t-xl bg-green-700 flex justify-center items-center'>
                      <img key={d.no} src={d.imgurl} alt="Image" className='h-44 w-44 rounded-full' />
                    </div>
                    <div key={d.no} className='flex flex-col justify-center items-center gap-4 p-4'>
                      <p className='md:text-xl text-lg  text-center font-semibold cursor-pointer'>{d.title}</p>
                      <p className='sm:text-wrap text-sm md:text-base text-center break-words sm:max-w-full xl:max-w-[1280px]'>
                        <span className='bg-white'>Position: </span>{d.position}
                      </p>
                      <p className=' sm:text-wrap text-sm md:text-base text-center  sm:max-w-full xl:max-w-[1280px]'>
                        <span className='bg-white'>Dep: </span> {d.dep}
                      </p>
                    </div>
                    {isLoggedIn && (
                      <div className='flex flex-col items-center'>
                        <button onClick={() => del(d.$id, d.img)} className='lg:w-[14rem] px-4 py-3 md:w-[8rem]   text-black border-gray-300 rounded-md bg-red-600 flex items-center justify-center hover:bg-green-400 hover:shadow-sm hover:border-black transition-colors duration-200'>
                          <Trash2 className='mr-2' />Remove
                        </button>
                      </div>
                    )}
                  </div>
                
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carous2;
