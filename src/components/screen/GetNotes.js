import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setFormSubmitted } from '../../redux/action';
import { useNavigate } from 'react-router-dom';

function GetNotes({ setFormSubmitted }) {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.form.formData);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
        setFormSubmitted(true);
        navigate('/card'); // Navigate to the /card route after form submission
    }
    catch(error){
       console.log("system error ")
    }
    };
     
    return (
        <div className='min-h-screen py-40'>
            <div className='container mx-auto'>
                <div className='w-full md:h-auto  h-[69rem]  flex flex-col md:flex-row bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                    <div className='w-full lg:w-1/2 flex justify-center items-center'>
                        <div className='h-0 md:mb-[45rem]'>
                            <img src="/pic/logo.jpg" alt="logo-image" className='md:h-[50rem]'/>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 md:py-16 px-12 mt-[32rem]  md:mt-0'>
                        <h2 className='text-3xl mb-4 cursor-default'>Welcome</h2>
                        <p className='mb-4 text-xl cursor-default'>
                            Please fill the following to get Note <br/>
                        </p>
                        <p className='mb-4 text-red-500 cursor-zoom-in'>
                            Note : Must follow form formate 
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="departmentName" className="block text-bold cursor-pointer text-gray-1000 mt-2 font-medium underline">Department *</label>
                                <input
                                    type="text"
                                    id="departmentName"
                                    name="departmentName"
                                    placeholder='Mathematics'
                                    value={formData.departmentName}
                                    onChange={handleInputChange}
                                    className="mt-1 hover:bg-gray-300 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="year" className="block text-bold cursor-pointer text-gray-1000 mt-2 font-medium underline">Year *</label>
                                <input
                                    type="text"
                                    id="year"
                                    name="year"
                                    placeholder='2nd or 1st'
                                    value={formData.year}
                                    onChange={handleInputChange}
                                    className="mt-1 hover:bg-gray-300 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="semester" className="block cursor-pointer text-bold text-gray-1000 mt-2 font-medium underline">Semester *</label>
                                <input
                                    type="text"
                                    id="semester"
                                    name="semester"
                                    placeholder='6th or 3rd'
                                    value={formData.semester}
                                    onChange={handleInputChange}
                                    className="mt-1 hover:bg-gray-300 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subjectName" className="cursor-pointer block text-bold text-gray-1000 mt-2 font-medium underline">Subject Name *</label>
                                <input
                                    type="text"
                                    id="subjectName"
                                    placeholder='Statistics or English essay '
                                    name="subjectName"
                                    value={formData.subjectName}
                                    onChange={handleInputChange}
                                    className="mt-1 hover:bg-gray-300 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full pt-2 mt-3  px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetNotes;
