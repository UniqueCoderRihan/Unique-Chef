import React, { createContext } from 'react';

export const AuthContex = createContext(null);

const AuthProvider = ({children}) => {

    const AuthInfo = {
        name:'raihan'
    }

    return (
       <AuthContex.Provider value={AuthInfo}>
            {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;