import React from 'react';
import ChefCard from '../../../Components/ChefCard/ChefCard';

const ChefMain = ({chef}) => {
    
    return (
        <div>
            <p className='text-center text-4xl font-bold p-2 text-pink-500'>Our Chefs</p>
            <div className='grid md:grid-cols-3 p-5'>
            {
                chef.map(singleChef=> <ChefCard
                key={singleChef.id}
                chef={singleChef}
                ></ChefCard>)
            }
        </div> 
        </div>
    );
};

export default ChefMain;