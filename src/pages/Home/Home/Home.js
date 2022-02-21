import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../image/men-women.svg'
import logo2 from '../../../image/nav-box.svg'
import logo3 from '../../../image/plane.svg'
import logo4 from '../../../image/truck.svg'
import Form1 from '../../Order/Form1/Form1';
import Details from '../Details/Details';



const Home = () => {
    return (
       <div>
            <div className='mt-20 mx-10 grid grid-cols-2 mb-20'>
            <div>
                <h1 className='text-6xl py-5 font-semibold'>Quick Transport and Logistics Solution</h1>
                <p className='text-2xl py-10'>We provide services in the field of road, sea, rail, air transportation and a full range of warehousing services.</p>
                <Link to="/services"><button className='px-4 py-4 bg-red-600 text-xl text-white font-semibold hover:bg-blue-300'>Get Solution</button></Link>
            </div>

            <div>
            <div className='grid grid-cols-2' >
            <img src={logo3} alt="" />
            <img src={logo1} alt="" />
            </div>
            <div className='grid grid-cols-2'>
            <img src={logo4} alt="" />
            <img src={logo2} alt="" />
            </div>
           
            </div> 
        </div>

        <Details/>

        <Form1></Form1>

       </div>
    );
};

export default Home;























































