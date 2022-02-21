import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-red-400 py-10'>Who We Are</h1>
            <div className='grid lg:grid-cols-2 mx-20'>
  
               <div>
                    <h3 className='text-4xl font-semibold py-5'>Serving the area for over 40 years</h3>
                    <p className='text-xl'>Menter is a full-service company, offering an ultimately reliable transportation of flatbed, oversized and overweight freight shipments throughout the area.</p>
                    <ul className='mt-5 text-xl text-blue-500'>
                        <li>Cargo transportation</li>
                        <li>Worldwide transport</li>
                        <li>Warehousing</li>
                        <li>Ground transport</li>
                        
                    </ul>
                </div>

                <img src="https://i.ibb.co/56Nf147/about-1-669x388.jpg" alt="" />
            </div>


            <div className='grid lg:grid-cols-2 mt-20 pb-10 bg-gray-300'>
            <img src="https://i.ibb.co/hX79J6w/about-2-946x628.jpg" alt="" />
                <div className='ml-10 mx-5'>
                <h3 className='text-4xl font-semibold py-5'>Serving the area for over 40 years</h3>
                <p className='mt-10'>We provide our clients with professional freight services that add value to the overall supply chain and assist our customers in the growth and success of their business.If you want a customized solution, we deliver global coverage, managed costs, and reliable project continuity. When choosing our company, you choose a long-lasting partner that will help you with success of your business.</p>

                <button className='mt-10 px-4 py-3 bg-gray-600 text-xl text-white font-semibold hover:bg-blue-300'>Get Solution</button>
                </div>
            </div>
        </div>
    );
};

export default About;