import React from 'react';
import { Link } from 'react-router-dom';

const Form1 = () => {
    return (
        <div>
            <h1 className='text-red-600 text-5xl font-semibold py-5 text-center'>Sender Details</h1>
           <div className='grid align-center justify-center  mb-10'>
           <form className='border-solid border-4 border-light-blue-500 px-5 py-3 shadow-2xl rounded-xl'>
               <p className='text-xl font-semibold'>Sender name*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter sender name" required></input>
            <p className='text-xl font-semibold'>Sender Mobile Number*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter mobile number" type="number" required></input>
            <p className='text-xl font-semibold'>Sender Email*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter sender email" type="email" required></input>
            <p className='text-xl font-semibold'>District*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter District" required></input>
            <p className='text-xl font-semibold'>Nearest area*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter nearest place" required></input>
            <p className='text-xl font-semibold'>Enter Address*</p>
            <input className="border border-red-800 block mt-2 pt-10 pb-4 lg:px-40"  placeholder="Enter Address" textarea required></input>
            <Link to="/form2"> <button className='mt-2 px-4 py-3 bg-gray-600 text-xl text-white font-semibold hover:bg-red-300'>Continue</button> </Link>

            </form>
           </div>
        </div>
    );
};

export default Form1;