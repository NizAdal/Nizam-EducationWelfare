import React from 'react'

const StepperControl = ({handleClick, currentStep,  steps, ButtonDisappear , ButtonDisable}) => {
  return (
    <div className='container flex justify-center w-full max-w-3xl mx-auto mt-4 mb-8  pt-2 md:space-x-48 space-x-20'>
      <>
      {(currentStep !== 3) && (
      <button 
      disabled={currentStep ===  3}
      onClick={()=>handleClick()}
      className={`bg-white text-slate-400 uppercase py-2 px-4
      rounded-xl font-semibold cursor-pointer border-2 border-slate-300
      hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-pointer":""}`}>
        Back
      </button>
      )}
     {(currentStep !== 3) && (
      <button 
      disabled={currentStep ===  3}
      onClick={() => handleClick('next')}
      className='bg-green-500 text-white uppercase py-2 px-4
      rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white
      transition duration-200 ease-in-out'>
        {currentStep === 2 ? "Confirm" : "Next"}
      </button>
      )}
      </>
    </div>
  )
}

export default StepperControl
