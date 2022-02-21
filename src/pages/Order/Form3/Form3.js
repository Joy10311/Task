import React from 'react';

const Form3 = () => {
    return (
        <div>
            <h2 className='text-red-600 text-5xl font-semibold py-5 text-center'>Parcel Details</h2>

           <div>
           <p className='text-xl font-semibold'>What do you want to send?*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 px-40" placeholder="Enter you want to send" required></input>

            <p className='text-xl font-semibold'>Package weight (KG) *</p>

           </div>

        </div>
    );
};

export default Form3;