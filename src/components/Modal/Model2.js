import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { X, Upload } from 'lucide-react';
import { bucket, databases } from '../../appwrite/config';

function Model2({ onCancel }) {
  const [samad, setsamad] = useState([]);
  const [image, setimage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setsamad({ ...samad, [name]: files ? files[0] : value });
  };

  console.log("here is samad", samad);
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

  const geet = async (e) => {
    if (e) e.preventDefault();
    if (!samad.post || !samad.video) {
      alert("Please fill all required fields!");
      return false;
    }
    try {
      const previousData = await databases.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_POST1_COLLECTION_ID);
      if (previousData.total > 0) {
        const previousDocumentId = previousData.documents[0].$id;
        const previousFileId = previousData.documents[0].postimg;
        await databases.deleteDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_POST1_COLLECTION_ID, previousDocumentId);
        await bucket.deleteFile(process.env.REACT_APP_POST1_BUCKET_ID, previousFileId);
        console.log('Previous data and file deleted:', previousDocumentId, previousFileId);
      }

      const yo = samad.video;
      const uniqueFileID = uuidv4();
      const upload = await bucket.createFile(process.env.REACT_APP_POST1_BUCKET_ID, uniqueFileID, yo);
      console.log('Video Upload:', upload);
      const Image = upload.$id;
      console.log("VideoId here", Image);

      const imgurl = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.REACT_APP_POST1_BUCKET_ID}/files/${Image}/view?project=${process.env.REACT_APP_PROJECT_ID}`;
      console.log('Video URL', imgurl);

      const hi = {
        Post: samad.post,
        postimg: Image,
        postimgurl: imgurl
      };
      const uniqueID = String(uuidv4());
      const hee = await databases.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_POST1_COLLECTION_ID, uniqueID, hi);
      console.log('Data Saved:', hee);
      alert("Form Submitted Successfully");
      onCancel();
    } catch (error) {
      console.log('File Upload Error', error);
      alert("Sorry, form submission failed. Please try again later.");
      onCancel();
    }
  };

  return (
    <div ref={ModelRef} onClick={close} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='md:mt-10 flex flex-col gap-5 text-white'>
        <button onClick={handleButton} className='place-self-end'><X size={30} /></button>
        <div className='bg-green-600 rounded-xl px-20 py-8 md:py-10 flex flex-col gap-5 items-center mx-4 w-72 md:w-auto'>
          <h1 className='md:text-3xl text-2xl font-extrabold'>Front Post</h1>
          <div className='m-auto shadow-custom-black w-4/6'></div>
          <form>
            <div className="mb-4">
              <textarea type="name"
                placeholder='Write Post'
                name='post'
                required
                className='md:w-full px-4 md:py-3 py-2 text-black border-gray-300 rounded-md'
                onChange={handleChange}
              />
            </div>

            <div className="mt-5 flex flex-col space-x-0 md:mb-7 mb-2">
              <input
                type="file"
                accept="video/*"
                name="video"
                className="border-gray-400 w-full"
                required
                onChange={handleChange}
              />
              <div className=''>Upload Video </div>
            </div>
            <button onClick={geet} className='w-full px-4 py-3 text-black border-gray-300 rounded-md bg-blue-600 flex items-center justify-center hover:bg-green-400 hover:shadow-sm hover:border-black transition-colors duration-200'>
              <Upload className="mr-2" />Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Model2;
