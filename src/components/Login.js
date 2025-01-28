import React, { useState } from 'react';
import { account } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if(email === "" || password === ""){
            alert("Invalid credentials");
        } else {
            login();
            navigate("/dashboard")
        }
    };

    const login = async () => {
        try {
            const we = await account.createEmailPasswordSession(email, password);
            console.log(we);
            alert("Congratuations you code in for conviance please refresh the page ")
        } catch (e) {
            alert("email or password is invalid")
        }
    };

    return (
        <div className='lg:ml-[30rem] md:ml-[14rem] mr-[30rem]  min-h-screen w-[30rem]'>
            <div className='flex flex-col  bg-white mt-20 mx-30  md:mx-20  lg:py-10 md:items-center md:justify-center'>
                <div className='w-full lg:w-1/2 h-96  mt-20'>
                    <div className=' md:h-[5rem]  hidden '>
                        <img src="/pic/logo.jpg" alt="logo-image" className='h-52 fixed' />
                    </div>
                    <div className=''>
                    <div className='flex flex-col justify-center md:mr-auto mr-28  items-center'>
                        <h2 className='text-3xl mb-4'>Login Form</h2>
                        <p className='mb-4 text-xl'>Please fill to login</p>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 hover:bg-gray-300 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 hover:bg-gray-300 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full pt-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
