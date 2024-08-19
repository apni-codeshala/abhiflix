import React, { useState } from 'react';
import Header from './Header';

import { BG_URL } from '../utils/constants';

const Login = () => {

    const [isSIgnInForm, setIsSignInForm] = useState(true);

    const toggleSigninForm = () => {
        setIsSignInForm(!isSIgnInForm);
    }

    return (
        <div className='h-svh'>
            <Header />
            <div className='absolute'>
                <img src={BG_URL} alt='login-background' />
            </div>
            <form 
                className='p-12 bg-black absolute w-3/12 my-44 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'
            >
                <h1 className='font-bold text-3xl py-4'>{isSIgnInForm ? "SIgn In" : "Sign Up"}</h1>
                {!isSIgnInForm && <input 
                    type='text' 
                    placeholder='Full Name' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                />}
                <input 
                    type='text' 
                    placeholder='Email Address' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSIgnInForm ? "SIgn In" : "Sign Up"}</button>
                <p className='py-4 text-center cursor-pointer'onClick={toggleSigninForm}>
                    {isSIgnInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
                </p>
            </form>
        </div>
    );
}

export default Login;