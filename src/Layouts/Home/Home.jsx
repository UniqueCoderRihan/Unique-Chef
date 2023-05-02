import React from 'react';
import Banner from '../../HomeSections/Banner/Banner';
import ChefMain from '../../HomeSections/ChefSection/ChefMain/ChefMain';
import WhyChoseUs from '../../HomeSections/WhyChoseUs/WhyChoseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefMain></ChefMain>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Home;