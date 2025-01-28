import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { X, Upload} from 'lucide-react';
import { bucket, databases } from '../../appwrite/config'; 
function Model({onCancel}) {
  
  const [adal, setadal] = useState([])
  const [image, setimage] = useState(null)
  
  const handleChange2 = (e) => {
    const { name, value, files} = e.target;
    setadal({...adal, [name]: files? files[0] :value});

    if(name === 'img' && files) {
      setimage(URL.createObjectURL(files[0]));
    }

  } ;
console.log("here is adal", adal)
  
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
    if(!adal.name || !adal.position || !adal.dep || !adal.img) {
      alert("Please fill all required fields!");
      return false;
    }
    try{
      const yo = adal.img
      const uniqueFileID = uuidv4();
      const upload = await bucket.createFile(process.env.REACT_APP_BUCKET_ID,uniqueFileID,yo);
      console.log('Image Upload:', upload)
      const Image = upload.$id;
      console.log("ImageId here",Image)
      const imgurl = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.REACT_APP_BUCKET_ID}/files/${Image}/view?project=${process.env.REACT_APP_PROJECT_ID}`;
      console.log('Image Url', imgurl);
      const hi = {
       title: adal.name,
       position:adal.position,
       dep:adal.dep,
       img:Image,
       imgurl:imgurl     
      } ;
      const uniqueID = String(uuidv4());
      const hee = await databases.createDocument(
        process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID,
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
        <div className='md:mt-10 flex flex-col gap-5 text-white'>
            <button onClick={handleButton}  className='place-self-end'><X size={30}/></button>
          <div className=''>
            <div className='bg-green-600 rounded-xl md:px-20 py-5 md:w-full  w-64  md:py-10 flex flex-col gap-5 items-center mx-4'>
              <h1 className='md:text-3xl text-xl  font-extrabold'>Body Form</h1>
            <div className='m-auto shadow-custom-black w-2/6  md:w-4/6'></div>
              <form>
              <div className='flex flex-col items-center justify-center'>  
              <div className="mb-4">
                <input type="name"
                placeholder='Name of Person'
                name='name'
                required 
                className='md:w-full px-2 py-1 md:px-4 md:py-3 w-50  text-black border-gray-300 rounded-md'
                onChange={handleChange2}
                />
                </div>
                <div className="mb-4">
                <input type="position"
                placeholder='Position of Person'
               name='position'
                required 
                 className='md:w-full px-2 py-1 md:px-4 md:py-3 w-50  text-black border-gray-300 rounded-md'
                onChange={handleChange2}
                />
                </div>
                <div className="mb-4">
                <input type="dep"
                placeholder='Department of person'
                name='dep'
                required 
                 className=' px-2 py-1 md:px-4 md:py-3 w-50  text-black border-gray-300 rounded-md'
                onChange={handleChange2}
                />
                </div>
                <div className='md:mt-3  flex flex-col  mb-2 md:ml-14 ml-[4.8rem]'>
                  <input type="file" accept="image/*"  name='img' className='border-2 border-gray-400 md:w-full border-none ' required onChange={handleChange2} />
                 {image && (
                   <img src={image} alt="" className="mt-2 md:max-h-40 md:max-w-20" />
                  )}
                <div className='ml-2'>Upload image </div>
                </div>
                <button type='submit' onClick={submit}  className='md:w-[14rem] px-4 py-3 w-[12.5rem]  text-black border-gray-300 rounded-md bg-blue-600 flex items-center justify-center hover:bg-green-400 hover:shadow-sm hover:border-black transition-colors duration-200'>
                 <Upload className="mr-2" />Submit
                 </button>
                  </div>
              </form>
            </div>
        </div>      
        </div>
    </div>
  )
} 

export default Model 
