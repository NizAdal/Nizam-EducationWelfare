import React, { useState } from 'react';
import Stepper from '../memberstep/Stepper';
import StepperContext from '../context/StepperContext';
import StepperControl from '../memberstep/StepperControl';
import Step1 from '../memberstep/Step1';
import Step2 from '../memberstep/Step2';
import Step3 from '../memberstep/Step3';
import { v4 as uuidv4 } from 'uuid';
import { databases3, bucket3 } from '../../appwrite/config3';

function Upload() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Step1",
    "Step2",
    "Step3"
  ];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Step1 grid={""} wid={"w-full"} mig={"mt-5"}
                      firstN={'Full Name'} 
                      secondN={'Department (ex: English)'}
                      email={'Year (ex: First,Second)'} 
                      dep={'Semester (ex: 6th, 7th, 8th)'}
                      year={'Email (ex: new@gmail.com)'}
                      dist={'Phone(Whatsapp) no:(ex:0314.....)'} />;
      case 2:
        return <Step2 address={'Subject (ex: PakStudies,Statistics)'}
                      reason={'Description about Note like teacher name whom you followed or any thing which can be helpful'}
                      image={<>Notes <br/>  Max file size: 50MB</>}
                      ac={"application/pdf"} />;
      case 3:
        return <Step3 file={" Your notes have been submitted. Thanks for uploading."} congract={"Congratulations!"} />;
      default:
    }
  };
  const handleClick = async (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }

    if (newStep === 3) {
      const Success = await jama(new Event('submit'));
      
    if (Success) {
      setCurrentStep(3);
    } else {
    }
    }
  };

  console.log("Here is user Data", userData);

  const jama = async (e) => {
    if (e) e.preventDefault();
    console.log('form submission Started');
    if (!userData.firstN || !userData.secondN || !userData.email || !userData.year || !userData.dist || !userData.address || !userData.reason || !userData.img) {
      alert("Please fill all required fields!");
      console.log("form validation failed:", userData);
      setCurrentStep(2);
      return false;
    }
    try {
      const adal = await userData.img;
      const fileId = uuidv4();
      const fileUpload = await bucket3.createFile(process.env.REACT_APP_MEMBER_BUCKET_ID, fileId, adal);
      console.log("uploaded image:", fileUpload);
      const image = fileUpload.$id;
      console.log("image is here", image);
      const imgurl = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.REACT_APP_MEMBER_BUCKET_ID}/files/${image}/view?project=${process.env.REACT_APP_PROJECT_ID3}`;
      console.log('Image URL', imgurl);
      const samad = {
        Name: userData.firstN,
        Dep: userData.secondN,
        year: userData.email,
        semester: userData.dep,
        email: userData.year,
        no: userData.dist,
        sub: userData.address,
        reason: userData.reason,
        img: image,
        imgurl: imgurl
      };
      console.log("here is samad", samad);
      const unique = String(uuidv4());
      const neo = await databases3.createDocument(
        process.env.REACT_APP_DB2_ID3,
        process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID,
        unique,
        samad
      );
      console.log("data saved :", neo);
      setCurrentStep(3);
      return true; // Indicate successful submission
    } catch (error) {
      console.log("form submission failed", error); // Provide error details
      alert("Sorry! Form submission failed try again later");
      setCurrentStep(2);
      return false; // Indicate failed submission
    }
  };

  return (
    <div className='min-h-screen py-20  md:py-40'>
      <div className='container mx-auto'>
        <div className='w-full flex flex-col md:flex-row bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <div className='h-20 md:mb-[45rem]'>
              <img src="/pic/logo.jpg" alt="logo-image"/>
            </div>
          </div>
          <div className='w-full lg:w-1/2 py-16 px-12 mt-96 md:mt-0'>
            <h2 className='text-3xl mb-4'>Welcome</h2>
            <p className='mb-4'>
              <span className='bg-white text-xl/2 text-green-700'>(NEW)</span> is Thankful to you for Helping
            </p>
            <Stepper steps={steps} currentStep={currentStep}/>
            <form onSubmit={jama}>
              <div className='my-10 p-10'>
                <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
                  {displaySteps(currentStep)}
                </StepperContext.Provider>
              </div>
              <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
