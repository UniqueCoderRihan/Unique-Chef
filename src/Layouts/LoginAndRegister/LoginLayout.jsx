import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabvar from '../../Components/Nabvar/Nabvar'; 

const LoginLayout = () => {
    return (
        <div>
           <Nabvar></Nabvar>
           <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;