import React from 'react';
import error from '../assets/error.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className='text-center m-10 text-green-500'>
        <h2 className='text-5xl'>Page not found</h2>
        <div className='w-[400px] mx-auto'>
            <Lottie animationData={error}></Lottie>
        </div>


    </div>
    );
};

export default ErrorPage;