import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    console.log(pricingData);

    return (
        <div>
            <h1>Membership Card</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing = {pricing}></PricingCard>)
            } */}
            {
                pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing = {pricing}></DaisyPricingCard>)
            }
            </div>
        </div>
    );
};

export default PricingOptions;