import React, { useEffect, useRef, useState } from 'react'
import { databases3,bucket3 } from '../../appwrite/config3';
import { X, Upload} from 'lucide-react';
import { Query } from 'appwrite';
function Model5({onCancel}) {
  
    const [malik, setmalik] = useState([]);
  
    const view = async () => {
      try {
        const response = await databases3.listDocuments(process.env.REACT_APP_DB2_ID3,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID,[Query.orderDesc('$createdAt')]);
        setmalik(response.documents);
        console.log("here is malik", malik);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      view();
    }, []);

    const handleViewClick = (url) => {
      window.open(url, '_blank');
  }


    const del = async (id, imgId) => {
      try {
        await databases3.deleteDocument(process.env.REACT_APP_DB2_ID3,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID,id);
        await bucket3.deleteFile(process.env.REACT_APP_MEMBER_BUCKET_ID, imgId);
        setmalik(malik.filter(doc => doc.$id !== id));
      } catch (e) {
        alert("Sorry Process Failed");
      }
    };

    
  const ModelRef = useRef();
  
  const handleButton = (event) => {
    event.stopPropagation();
    onCancel();
  };

  const close = (e) =>{
    if(ModelRef.current === e.target){
      handleButton(e)
    }
  }
   
  
  const images = [
    '/pic/notes.png',
];

  return (
    <div ref={ModelRef} onClick={close}  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='md:mt-10 flex flex-col gap-5 text-white'>
            <button onClick={handleButton}  className='place-self-end'><X size={30}/></button>
            <div className='max-h-96 overflow-y-auto bg-green-600 rounded-xl md:px-20 md:py-10 py-5  flex flex-col gap-5 items-center md:mx-4 w-80  md:w-auto'>
            <h1 className='md:text-3xl text-xl font-extrabold'>Notes</h1>
            <div className='m-auto shadow-custom-black  w-1/6'></div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8  md:pt-2 ">
                  {malik && malik.map((d) => (
                  <div className="flex flex-col items-center px-8  px-auto  justify-center bg-orange-200 rounded-xl md:h-[45rem] h-[36rem]  shadow-lg md:w-full  w-64" key="">
                  <div className=" p-5 w-full">
                  <div className='h-20 rounded-t-xl flex justify-center items-center'>
                  <img  key=''  src={images} alt="Image" className='text-black font-bold text-xl  rounded-full' />
                  </div>
                      <div className='flex flex-col items-start lg:mt-20 mt-10'>
                       <p className="text-base md:text-xl  text-black  font-medium mt-3">Name: {d.Name}</p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black">Dep: {d.Dep}</span></p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black">Year: {d.year}</span></p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black">Semester: {d.semester}</span></p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black break-all">Email: {d.email}</span></p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black">No: {d.no}</span></p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black">Sub: {d.sub}</span></p>
                        <p className="text-slate-500 text-base  md:text-lg mt-3">
                          <span className="bg-orange-200 text-black">Desc: {d.reason}</span></p>
                                </div>
                                </div>
                                <div className='flex flex-row items-center justify-between gap-5 '>
                                    <button onClick={() => handleViewClick(d.imgurl)}  className="mt-3 text-center  px-16  bg-gray-300 text-black py-2 rounded-lg font-semibold hover:bg-white focus:scale-95 transition-all duration-200 ease-out">View</button>
                                    </div>
                                    <button onClick={() => del(d.$id, d.img)}  className="mt-3 text-center px-16 bg-red-400 text-black py-2 rounded-lg font-semibold hover:bg-white focus:scale-95 transition-all duration-200 ease-out ">Delete</button>
                                </div>
                    ))}      
                          </div>
                          </div>
                            
            </div>
        </div>      

  )
}

export default Model5