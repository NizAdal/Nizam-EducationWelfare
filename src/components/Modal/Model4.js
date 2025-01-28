import React, { useEffect, useRef, useState } from 'react';
import { bucket2, databases2 } from '../../appwrite/config2';
import { X, Upload } from 'lucide-react';
import { Query } from 'appwrite';

function Model4({ onCancel }) {
  const [you, setYou] = useState([]);
  
  const view = async () => {
    try {
      const response = await databases2.listDocuments(process.env.REACT_APP_DB2_ID,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID2,[Query.orderDesc('$createdAt')]);
      setYou(response.documents);
      console.log("here is you", response.documents);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    view();
  }, []);

  const ModelRef = useRef();

  const handleButton = (event) => {
    event.stopPropagation();
    onCancel();
  };
 
  const close = (e) => {
    if (ModelRef.current === e.target) {
      handleButton(e);
    }
  };

  const del = async (id, imgId) => {
    try {
      await databases2.deleteDocument(process.env.REACT_APP_DB2_ID,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID2, id);
      await bucket2.deleteFile(process.env.REACT_APP_MEMBER_BUCKET_ID2, imgId);
      setYou(you.filter(doc => doc.$id !== id));
    } catch (e) {
      alert("Sorry Process Failed");
    }
  };

  const up = async (id) => {
    try {
      const document = await databases2.getDocument(process.env.REACT_APP_DB2_ID,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID2, id);
      const newStatus = document.dis ? false : true;
  
      await databases2.updateDocument(process.env.REACT_APP_DB2_ID,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID2, id, {
        dis: newStatus
      });
      alert("Got it")
    } catch (e) {
      alert("Sorry Process Failed");
    }
  };
  
  

  return (
    <div ref={ModelRef} onClick={close} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="md:mt-10 flex flex-col gap-5 text-white">
        <button onClick={handleButton} className="place-self-end">
          <X size={30} />
        </button>
        <div className="max-h-96 overflow-y-auto bg-green-600 rounded-xl md:px-20 md:py-10 py-0 flex flex-col gap-5 items-center md:mx-4 w-80 md:w-auto">
          <h1 className="md:text-sm text-xl font-extrabold">Members</h1>
          <div className="m-auto shadow-custom-black w-1/6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {you && you.map((d) => (
              <div className="flex flex-col items-center px-8 px-auto justify-center bg-orange-200 rounded-xl md:h-[45rem] h-[23rem] shadow-lg md:w-full w-64" key={d.id}>
                <div className="p-5 w-full">
                  <div className="h-20 rounded-t-xl flex justify-center items-center">
                    <img src={d.imgurl} alt="Image" 
                    className="text-black font-bold text-xl rounded-full mt-2 mb-8" style={{ width: '100px', height: '100px' }} />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-md text-black font-medium mt-12">Name: <span className="bg-orange-200 text-black"> {d.firstN} {d.secondN}</span></p>
                    <p className="text-slate-500 text-base mt-2 break-all">
                      <span className="bg-orange-200 text-black">Email: {d.email}</span>
                    </p>
                    <p className="text-slate-500 text-base mt-2">
                      <span className="bg-orange-200 text-black">Dep: {d.dep}</span>
                    </p>
                    <p className="text-slate-500 text-base mt-2">
                      <span className="bg-orange-200 text-black">Year: {d.year}</span>
                    </p>
                    <p className="text-slate-500 text-base mt-2">
                      <span className="bg-orange-200 text-black">Dist: {d.dist}</span>
                    </p>
                    <p className="text-slate-500 text-base mt-2">
                      <span className="bg-orange-200 text-black">Address: {d.address}</span>
                    </p>
                    <p className="text-slate-500 text-base mt-2">
                      <span className="bg-orange-200 text-black">Reason: {d.reason}</span>
                    </p>
                  </div>
                </div>

                  <button onClick={() => up(d.$id)}  className="mt-3 text-center px-12  bg-green-400 text-black py-2 rounded-lg font-semibold hover:bg-white focus:scale-95 transition-all duration-200 ease-out">Allow/Block</button>
                <button onClick={() => del(d.$id, d.img)} className="mt-3 text-center px-16 bg-red-400 text-black py-2 rounded-lg font-semibold hover:bg-white focus:scale-95 transition-all duration-200 ease-out">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model4;
