import React from 'react';



const Form3 = () => {

   
    const myFunction1=()=>{
        document.getElementById('inside').addEventListener('click', function () {
            const insidePrice = document.getElementById('route');
            const insidePriceAdded = parseFloat(insidePrice.innerText);
            const insidePriceTotal = 0;
            insidePrice.innerText = insidePriceTotal;
            calculation()
        });
    }
    
    const myFunction2=()=>{
        document.getElementById('outside').addEventListener('click', function () {
            const outsidePrice = document.getElementById('route');
            const outsidePriceAdded = parseInt(outsidePrice.innerText);
            const outsidePriceTotal = 50;
        
            outsidePrice.innerText = outsidePriceTotal;
            calculation();
        });
    }

    //    weight*****************
        const myFunction3=()=>{
            document.getElementById('kg-1').addEventListener('click', function () {
                const firstWeight = document.getElementById('weight-cost');
                const firstWeightAdded = parseFloat(firstWeight.innerText);
                const firstWeightPrice = 0;
                firstWeight.innerText = firstWeightPrice;
                calculation();
            });
        }


      const  myFunction4=()=>{
        document.getElementById('kg-2').addEventListener('click', function () {
            const secondWeight = document.getElementById('weight-cost');
            const secondWeightAdded = parseFloat(secondWeight.innerTex);
            const secondWeightPrice = 20;
            secondWeight.innerText = secondWeightPrice;
            calculation();
        });
      }



      const myFunction5=()=>{
        document.getElementById('kg-3').addEventListener('click', function () {
            const thirdWeight = document.getElementById('weight-cost');
            const thirdWeightAdded = parseFloat(thirdWeight.innerText);
            const thirdWeightPrice = 50;
            thirdWeight.innerText = thirdWeightPrice;
            calculation();
        });
      }


      const myFunction6=()=>{
        document.getElementById('free-charge').addEventListener('click', function () {
            const freepackaging = document.getElementById('packaging-cost');
            const freepackagingCost = parseInt(freepackaging.innerText);
            const freepackagingTotalCost = 0;
        
            freepackaging.innerText = freepackagingTotalCost;
        
            calculation();
        });
      }



      const myFunction7=()=>{
        document.getElementById('premium-charge').addEventListener('click', function () {
            const premiumpackaging = document.getElementById('packaging-cost');
            const premiumpackagingCost = parseInt(premiumpackaging.innerText);
            const premiumpackagingTotalCost = 20;
            premiumpackaging.innerText = premiumpackagingTotalCost;
        
            calculation();
        
        
        });
      }
    
    const calculation =()=>{
        const extraRouteCost = document.getElementById('route').innerText;
        const extraRouteCostInt = parseInt(extraRouteCost);

        const weightCost = document.getElementById('weight-cost').innerText;
        const weightCostInt = parseInt(weightCost);

        const packagingPrice = document.getElementById('packaging-cost').innerText;
        const packagingPriceInt = parseInt(packagingPrice);

        const basePrice = document.getElementById('base-price').innerText;
        const basePriceInt = parseInt(basePrice);



      const  subTotal = extraRouteCostInt + weightCostInt + packagingPriceInt + basePriceInt;
    document.getElementById('total-price').innerText = subTotal;
    }

        const click=()=>{
            
            if(click){
                window.location.reload(false)
                alert('Booking Successfully')
            }
        }




    return (
        <div>
            <h2 className='text-red-600 text-5xl font-semibold py-5 text-center'>Parcel Details</h2>

           <div className='grid justify-center align-center rounded-t-lg m-5 lg:w-3/5 w-4/5 mx-auto bg-gray-200 text-gray-800'>
           <p className='text-xl font-semibold pt-3'>What do you want to send?*</p>
            <input className="border border-red-800 block mt-2 pt-2 pb-2 lg:px-40" placeholder="Enter you want to send" required></input>
                {/* Weight */}
            <div className='mt-3'>
            <p className='text-xl font-semibold mb-1 '>Package weight (KG) *</p>
            <button id='kg-1' onClick={()=>myFunction3()} className="border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2">1-3 kg free</button>

            <button id='kg-2' onClick={()=>myFunction4()}  className="border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2 lg:mt-0 mt-2">4-10 kg 20$</button>
           
            <button id='kg-3' onClick={()=>myFunction5()} className="border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2 lg:mt-0 mt-2">11-20 kg 50$</button>
            
            </div>
                {/* destination */}
            <div className='mt-3'>
            <p className='text-xl font-semibold mb-1'>Choose destination*</p>
            <button id='inside'  onClick={()=>myFunction1()}  className='border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2'>Inside Dhaka Free</button>
            <button id='outside' onClick={()=>myFunction2()} className='border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2 lg:mt-0 mt-2'>Outside Dhaka 50$</button>
            </div>

            {/* package */}

            <div className='pb-10 mt-3'>
            <p className='text-xl font-semibold'> Want Packaging service?*</p>
            <button id='free-charge'  onClick={()=>myFunction6()} className='border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2'>No</button>

            <button id='premium-charge'  onClick={()=>myFunction7()} className='border rounded border-red-800 px-2 py-1 bg-gray-500 text-white hover:bg-red-500 mx-2 lg:mt-0 mt-2'>Yes</button>
           
            </div>

           </div>

           
            <table className="rounded-t-lg m-5 lg:w-3/5 w-4/5 mx-auto bg-gray-200 text-gray-800">
           <tbody>
           <tr className="text-left border-b-2 border-gray-300">
                <th className="px-4 py-3">Charge</th>
                <th className="px-4 py-3">Cost</th>
            </tr>
            
            <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">General packaging</td>
                <td> <span id='base-price' className="px-4 py-3">300</span> $</td>
                
            </tr> 
            {/* <!-- each row --> */}
            <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">Extra Weight</td>
                <td id='weight-cost' className="px-4 py-3">0</td>
            </tr> 
            {/* <!-- each row --> */}
            <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">Route Charge</td>
                <td id='route' className="px-4 py-3">0</td>
            </tr> 
            {/* <!-- each row --> */}
            <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">Packaging Service</td>
                <td id='packaging-cost' className="px-4 py-3">0</td>
            </tr> 
            {/* <!-- each row --> */}
            <tr className="bg-gray-300 border-b border-gray-200">
                <td className="px-4 py-3 font-bold">Total Cost</td>
                <td> <span id='total-price' className="px-4 py-3 font-bold">300</span> $</td>
            </tr> 
            
            <tr>
            <td className="px-4 py-3 font-bold">
                <input type="checkbox" required className="form-checkbox"/>
             <span className="ml-2">I agree to the <span className="underline">privacy policy</span></span>
             </td>
            <td>
            <button onClick={()=>click()} className='bg-blue-500 rounded text-xl text-white px-3 py-2'>Confirm & Pay</button>
            </td>   
            </tr>
           </tbody>

            </table>


        </div>
    );
};

export default Form3;