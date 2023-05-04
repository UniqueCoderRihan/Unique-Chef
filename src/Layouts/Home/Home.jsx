import React from 'react';
import Banner from '../../HomeSections/Banner/Banner';
import ChefMain from '../../HomeSections/ChefSection/ChefMain/ChefMain';
import WhyChoseUs from '../../HomeSections/WhyChoseUs/WhyChoseUs';
import { useLoaderData } from 'react-router-dom';
import Table from '../../HomeSections/Table/Table';

const Home = () => {
    const chef = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ChefMain chef={chef} ></ChefMain>
            <WhyChoseUs></WhyChoseUs>
            <Table></Table>
        </div>
    );
};

export default Home;