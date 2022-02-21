import React from 'react';
import logo1 from '../../../image/dot-line.svg'
import logo5 from '../../../image/air-freight-2.svg'
import logo6 from '../../../image/budget.svg'
import logo7 from '../../../image/inventory.svg'
import logo8 from '../../../image/truck-2.svg'
import man_logo from '../../../image/chose1.jpg'


const Details = () => {
    return (
        <div className='mt-10'>

            <div className='grid grid-cols-2 mx-10 mb-10'>
                <div>
                    <img src={man_logo} alt="" />
                </div>
                <div>
                <h5 className='text-red-600 text-xl font-semibold mt-5 text-center'> Why should you choose Opic</h5>
                <h1  className='text-6xl py-5 font-semibold text-justify'>The fastest, easiest way to get products to your customers.</h1>

                <p className='mt-5 text-xl font-semibold'>We provide our clients with professional freight services that add value to the overall supply chain and assist our customers in the growth and success of their business.If you want a customized solution, we deliver global coverage, managed costs, and reliable project continuity. When choosing our company, you choose a long-lasting partner that will help you with success of your business.</p>

                <button className='mt-10 px-4 py-3 bg-gray-600 text-xl text-white font-semibold hover:bg-red-300'>Get Solution</button>

                </div>

               
            </div>



            <div className='mt-20'>
                <p className='text-red-600 text-xl text-center' >Our Work System</p>
                <h1 className='text-5xl py-5 font-semibold text-center'>The way we work at a opic company <br /> Transport and Logistics</h1>
            </div>
            <div className='align-center justify-center mt-10 lg:flex mx-5 pb-20'>
               <div>
               <img width={70} height={70} pt-5 src={logo6} alt="" />
                <p className=' text-xl font-semibold'>Transparent Pricing</p>
               </div>
                <img src={logo1} alt="" />
                <div>
                <img  width={70} height={70} pt-5 src={logo5} alt="" />
                <p className=' text-xl font-semibold'>Fast Logistics</p>
                </div>
                <img src={logo1} alt="" />
               <div>
               <img  width={70} height={70} pt-5 src={logo7} alt="" />
               <p className='text-xl font-semibold'>Packaging & Distribution</p>
               </div>
                <img src={logo1} alt="" />
                <div>
                <img  width={70} height={70} pt-5 src={logo8} alt="" />
                <p className=' text-xl font-semibold'>Transportation Process</p>
                </div>

            </div>
        </div>
    );
};

export default Details;