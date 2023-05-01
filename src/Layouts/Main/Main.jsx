import React from 'react';
import Nabvar from '../../Components/Nabvar/Nabvar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;