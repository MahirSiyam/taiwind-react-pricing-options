import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name , price , description , features} = pricing;
    return (
        <div className='border bg-blue-950 rounded-3xl p-5 flex flex-col'>
            card header
            <div>
                <h1 className='text-7xl text-gray-300 w-9/12'>{name}</h1>
                <h4 className='text-3xl text-gray-300'>{price}</h4>
            </div>

            {/* card body */}

            <div className='bg-blue-900 p-5 rounded-3xl mt-10 flex-1'> 
                <p className='font-extrabold'>{description}</p>

                {
                    features.map((feature,index) => <PricingFeatures key={index} feature = {feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full bg-gray-200 text-blue-950 rounded-3xl mt-2">Wide</button>
        </div>
    );
};

export default PricingCard;