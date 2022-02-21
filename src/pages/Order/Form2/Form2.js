import React from 'react';
import { Link } from 'react-router-dom';

const Form2 = () => {
    return (
        <div>
            <h2 className='text-red-600 text-5xl font-semibold py-5 text-center'>Recipient Details</h2>

            <div className='grid align-center justify-center  mb-10'>
           <form className='border-solid border-4 border-light-blue-500 px-5 py-3 shadow-2xl rounded-xl'>
               <p className='text-xl font-semibold'>Recipient name*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter Recipient name" required></input>
            <p className='text-xl font-semibold'>Recipient Mobile Number*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter mobile number" type="number" required></input>
            <p className='text-xl font-semibold'>Recipient Email*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter Recipient email" type="email" required></input>
            <p className='text-xl font-semibold'>District*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter District" required></input>
            <p className='text-xl font-semibold'>Nearest area*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter nearest place" required></input>
            <p className='text-xl font-semibold'>Enter Address*</p>
            <input className="border border-red-800 block mt-2 pt-10 pb-4 lg:px-40"  placeholder="Enter Address" textarea required></input>
            
            <Link to="/form1"> <button className='mt-2  px-4 py-3 bg-gray-600 text-xl text-white font-semibold hover:bg-red-300'>Back</button> </Link>
            <Link to="/form3"> <button className='mt-2 lg:ml-56 px-4 py-3 bg-blue-600 text-xl text-white font-semibold hover:bg-red-300'>Continue</button> </Link>
            </form>
           </div>
        </div>
    );
};

export default Form2;