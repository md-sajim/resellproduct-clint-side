import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const value = {}
    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;