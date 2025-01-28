import React, { useState } from 'react';
import Stepper from '../memberstep/Stepper';
import StepperContext from '../context/StepperContext';
import StepperControl from '../memberstep/StepperControl';
import Step1 from '../memberstep/Step1';
import Step2 from '../memberstep/Step2';
import Step3 from '../memberstep/Step3';
import { v4 as uuidv4 } from 'uuid';
import { databases2,bucket2 } from '../../appwrite/config2';
import { useSelector } from 'react-redux';
function Be() {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Step1",
    "Step2",
    "Step3"
  ];
  const darkMode = useSelector((state)=> state.darkMode);
  const displaySteps = (step)=>{
    switch(step) {
      case 1 :
        return <Step1  grid={"grid grid-cols-2 gap-2 "}
        
        firstN={'Firstname'} 
        secondN={'Secondname'}
        email={'Email (ex: new@gmail.com)'}
        dep={'Department (ex: Mathematics)'}
        year={'Year (ex: 2nd,4th)'}
        dist={'District (ex: Hyderabad,Badin)'}
        />
      case 2 :
        return <Step2 address={'Address(ex: Post office Tando Qaiser Hyderabad)'}
        reason={'Reason to join (NEW)'}
        image={"Image"}
        ac={"image/*"}
        />
      case 3 :
        return <Step3 file={"Your membership form has been submitted."} congract={"Congratulations!"}/>
      default:  
    }
  }

const handleClick = async (direction) => {
  let newStep = currentStep;
  direction === "next" ? newStep++ : newStep--;

  if (newStep > 0 && newStep <= steps.length) {
    setCurrentStep(newStep);
  }

  if (newStep === 3) {
    const submitSuccess = await handlesubmit(new Event('submit'));
    
    if (submitSuccess) {
      setCurrentStep(3);
    } else {
    }
  }
};


   
  const handlesubmit = async (e) => {
    if (e) e.preventDefault();
    console.log('Form submission started');
    if (!userData.firstN || !userData.secondN || !userData.email || !userData.dep || !userData.year || !userData.dist || !userData.address || !userData.reason || !userData.img) {
      alert("Please fill all required fields!");
      console.log('Form validation failed:', userData);
      setCurrentStep(2);
      return false;
    }
  
    try {
      const hi = userData.img
      const uniqueFileID = uuidv4(); 
      const fileUploadResponse = await bucket2.createFile(process.env.REACT_APP_MEMBER_BUCKET_ID2,uniqueFileID,hi);
      console.log('Image uploaded:', fileUploadResponse);
      const imageId = fileUploadResponse.$id;
      console.log("imageId is here", imageId);
      const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.REACT_APP_MEMBER_BUCKET_ID2}/files/${imageId}/view?project=${process.env.REACT_APP_PROJECT_ID2}`;
      console.log('Image URL:', imageUrl);
      const adal = {
        no: 1,
        firstN: userData.firstN,
        secondN: userData.secondN,
        email: userData.email,
        dep: userData.dep,
        year: userData.year,
        dist: userData.dist,
        address: userData.address,
        reason: userData.reason,
        img: imageId,
        imgurl: imageUrl
      };
      const uniqueID = String(uuidv4());
      const response = await databases2.createDocument(
        process.env.REACT_APP_DB2_ID,
        process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID2,
        uniqueID,
        adal,
      );
      console.log('Data saved:', response);
      setCurrentStep(3);
      return  
    } catch (error) {
      alert("Sorry something went wrong please try again later")
      console.error('File upload error:', error);
      setCurrentStep(2);
      return 
    }
  };
  
  return (
    <div className='min-h-screen  md:py-40 py-20'>
      <div className='container mx-auto '>
      <div className={`w-full flex flex-col  md:flex-row ${darkMode ? "bg-gray-400" : "bg-white"} rounded-xl mx-auto shadow-lg overflow-hidden`}>
        <div className='w-full  lg:w-1/2 flex justify-center items-center'>
        <div className='md:h-20 h-0  md:w-full mb-[30rem]  md:mb-[45rem]'>
          <img src="/pic/logo.jpg" alt="logo-image" className={`w-[50rem] ${darkMode ? "h-[50rem]" : "h-auto"} transition duration-300`}/>
          </div>
        </div>
        <div className='w-full  lg:w-1/2 md:py-16 px-12  md:mt-0 '>
        <div>
          <h2 className='text-3xl mb-4 '>Welcome</h2>
          <p className='mb-4'>
            Register Yourself to be part of <span className= {` ${darkMode ? "text-black" : "text-green-700"}  text-xl/2 `} style={{ backgroundColor: 'transparent' }}>(NEW)</span>   
          </p>
          <Stepper steps={steps} currentStep={currentStep}/>
          {/* <div className='container horizontal mt-5'>
          {/* <Stepper/> */}
          </div>
          <form onSubmit={handlesubmit}>
          <div className='my-10 p-10'>
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }}>
              {displaySteps(currentStep)}
            </StepperContext.Provider>
          </div>
              
          <StepperControl 
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
          </form>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Be
