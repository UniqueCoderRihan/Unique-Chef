import React from 'react';
import Banner from '../../HomeSections/Banner/Banner';
import ChefMain from '../../HomeSections/ChefSection/ChefMain/ChefMain';
import WhyChoseUs from '../../HomeSections/WhyChoseUs/WhyChoseUs';
import Review from '../../HomeSections/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefMain></ChefMain>
            <WhyChoseUs></WhyChoseUs>
            <Review></Review>
        </div>
    );
};

export default Home;