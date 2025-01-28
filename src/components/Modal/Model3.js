import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { X, Upload} from 'lucide-react';
import { bucket, databases } from '../../appwrite/config';
function Model3({onCancel}) {
  
  const [hadi, sethadi] = useState([])
  const [image, setimage] = useState(null)
  
  const handleChange3 = (e) => {
    const { name, value, files} = e.target;
    sethadi({...hadi, [name]: files? files[0] :value});

    if(name === 'img' && files) {
      setimage(URL.createObjectURL(files[0]));
    }

  } ;
console.log("here is hadi", hadi)
  
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
  
  const submit = async (e) => {
    if (e) e.preventDefault();
    if(!hadi.name || !hadi.desc || !hadi.img) {
      alert("Please fill all required fields!");
      return false;
    }
    try{
      const yo = hadi.img
      const uniqueFileID = uuidv4();
      const upload = await bucket.createFile(process.env.REACT_APP_POST2_BUCKET_ID,uniqueFileID,yo);
      console.log('Image Upload:', upload)
      const Image = upload.$id;
      console.log("ImageId here",Image)
      const imgurl = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.REACT_APP_POST2_BUCKET_ID}/files/${Image}/view?project=${process.env.REACT_APP_PROJECT_ID}`;
      console.log('Image Url', imgurl);
      const hi = {
       title: hadi.name,
       desc:hadi.desc,
       img:Image,
       imgurl:imgurl     
      };
      const uniqueID = String(uuidv4());
      const hee = await databases.createDocument(
        process.env.REACT_APP_DB_ID,process.env.REACT_APP_POST2_COLLECTION_ID,
        uniqueID,
        hi,
      );
      console.log('Data Saved:', hee);
      alert("Form Submited Successfully")
      onCancel();
    }
    catch (error){
      console.log('File Upload Error')
      alert("Sorry form failed try again later")
      onCancel();
    }
  }


  return (
    <div ref={ModelRef} onClick={close}  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='md:mt-10  flex flex-col md:gap-5 gap-2  text-white'>
            <button onClick={handleButton}  className='place-self-end'><X size={30}/></button>
            <div className='bg-green-600 rounded-xl px-20 py-8 flex flex-col gap-5   items-center mx-4 w-64 h-[22.5rem] md:h-auto  md:w-auto'>
              <h1 className='md:text-3xl text-2xl  font-extrabold'>Post</h1>
              <div className='m-auto shadow-custom-black  w-2/6'></div>
              <form>
              <div className="mb-4">
                <input type="name"
                placeholder='Title'
                name='name'
                required 
                className='md:w-full md:px-4 px-3   md:py-3 py-2 text-black border-gray-300 rounded-md'
                onChange={handleChange3}
                />
                </div>
                <div className="mb-4">
                <textarea type="position"
                placeholder='Post'
               name='desc'
                required 
                className='md:w-full w-[13.15rem]  px-3 md:py-3 text-black border-gray-300 rounded-md'
                onChange={handleChange3}
                />
                </div>
             
                <div className='mt-5 flex flex-col space-x-0 mt:mb-7 mb-3'>
                  <input type="file" accept="image/*"  name='img' className='border-2 border-gray-400 w-full border-none' required onChange={handleChange3} />
                 {image && (
                <img src={image} alt="" className="mt-2 max-h-40 max-w-20" />
                )}
                <div className=''>Upload image </div>
                </div>
                <button type='submit'  onClick={submit}   className='w-full px-4 py-3   text-black border-gray-300 rounded-md bg-blue-600 flex items-center justify-center hover:bg-green-400 hover:shadow-sm hover:border-black transition-colors duration-200'>
                 <Upload className="mr-2" />Submit
                 </button>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default Model3
