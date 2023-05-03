import React from 'react';
import Banner from '../../HomeSections/Banner/Banner';
import ChefMain from '../../HomeSections/ChefSection/ChefMain/ChefMain';
import WhyChoseUs from '../../HomeSections/WhyChoseUs/WhyChoseUs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chef = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <ChefMain chef={chef} ></ChefMain>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;