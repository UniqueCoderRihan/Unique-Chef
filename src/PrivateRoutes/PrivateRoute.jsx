import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContex);
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>
};

export default PrivateRoute;