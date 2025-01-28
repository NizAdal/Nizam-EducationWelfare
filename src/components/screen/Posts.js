import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carous/Carousel';
import Pagination from '../Pagination';
import { motion } from "framer-motion";
import { SlideLeft } from '../../utility/animation';
import { databases } from "../../appwrite/config";
import { Query } from 'appwrite';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Skel from '../Skeleton/Skel';
import SkelPost from '../Skeleton/SkelPost';
import { useSelector } from 'react-redux';
function Posts() {
  const darkMode = useSelector((state) => state.darkMode);
  const [showPerPage, setShowPerPage] = useState(8);
  const [loadingAllTodo, setLoadingAllTodo] = useState(true);
  const [loadingHetodo, setLoadingHetodo] = useState(true);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start, end });
  };

  useEffect(() => {
    view();
  }, []);

  const [alltodo, setAllTodo] = useState([]);
  const [hetodo, setHetodo] = useState([]);

  const view = async () => {
    try {
      const x = await databases.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_POST1_COLLECTION_ID, []);
      setAllTodo(x.documents);
      setLoadingAllTodo(false);
      localStorage.setItem('alltodo', JSON.stringify(x.documents)); // Save to localStorage
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem('alltodo');
    if (cachedData) {
      setAllTodo(JSON.parse(cachedData));
    } else {
      view();
    }
  }, []);

  const nizam = async () => {
    try {
      const z = await databases.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_POST2_COLLECTION_ID, [Query.orderDesc('$createdAt')]);
      setHetodo(z.documents);
      setLoadingHetodo(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    nizam();
  }, []);
  

  return (
    <>
      <div className='flex flex-col sm:gap-0 gap-7  md:gap-20'>
        <div className='w-[60%] m-auto md:pt-11 '>
          <Carousel />
        </div>
        <div className='2xl:overflow-hidden lg:mt-96 md:mt-[34rem] sm:mt-56 mt-[24rem]'>
          <div className='container pb-0'>
            <div className='flex justify-center items-center'>
              <div className='md:space-y-4 md:p-0 text-center max-w-[500px] mx-auto md:mb-0'>
                <h1 className='uppercase font-semibold text-orange-600 md:text-2xl text-xl'>
                  Here are Activities of <span className='text-green-400'>NEW</span>
                </h1>
                <div className='m-auto mt-5 shadow-custom-green w-3/6'></div>
                <p className={`font-semibold md:text-xl text-lg  ${darkMode ? "text-white" : "text-black"}`}>
                  Nizam Education Welfare (NEW) is bound to work with matters related to the University of Sindh Jamshoro.
                </p>
              </div>
            </div>
          </div>
        </div>
        {loadingAllTodo ? (
          <SkelPost/>
        ) : (
          <div className='grid md:grid-row-2 grid-rows-1'>
            {alltodo.map((d) => (
              <div key={d.id}>
                <div className={`mb-0 flex items-center justify-center  md:flex   md:justify-center md:items-center`}>
                  <video className={` lg:w-4/5 ${darkMode ? "border-indigo-50 border ":"border-black shadow-2xl"}  rounded-lg object-contain h-[500px] md:w-4/5 md:object-cover md:rounded-lg`} controls>
                    <source src={d.postimgurl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className='flex justify-center items-center'>
                  <p className='w-[80%] mt-4'>
                    <span className='bg-amber-100 bold md:text-2xl text-lg '>Nizam Education Welfare (NEW)</span><br />
                    <p className={`${darkMode ? "text-white" : "text-black"}`}>
                    {d.Post}
                    </p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='m-auto lg:mt-0  md:mt-4 shadow-custom-green w-3/6'></div>
        <style>
          {`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          `}
        </style>
        {loadingHetodo ? (
          <Skel/>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-5  lg:pb-0 lg:mt-0  md:mt-0'>
            {hetodo.slice(pagination.start, pagination.end).map((item) => (
              <motion.div
                key={item.$id}
                variants={SlideLeft()}
                initial="hidden"
                whileInView={"visible"}
                className='space-y-4  p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-green-500 cursor-pointer'
              >
                <Link to="/postdetails" state={{ id: item.$id, title: item.title, desc: item.desc, imgurl:item.imgurl  }}>
                  <div style={{ backgroundColor: item.bgColor }} className='w-10 h-10 rounded-lg flex justify-center items-center text-white '>
                    <img className='object-contain mb-4 text-2xl h-[500px]' src="/pic/logo.jpg" alt="Logo" />
                    <img className='object-contain mb-4 text-2xl h-[500px] hidden' src={item.imgurl} alt="Image" />
                  </div>
                  <p className='font-semibold'>{item.title}</p>
                  <p className='text-sm text-gray-950 break-words min-[5000px]:w-auto line-clamp-3'>{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
        <div>
          <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={hetodo.length} />
        </div>
      </div>
    </>
  );
}

export default Posts;
