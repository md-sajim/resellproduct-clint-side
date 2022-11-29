import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import "./Privaterouter.css"

const Privaterouter = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    if (loding) {
        return <div className='text-center d-flex justify-content-center mt-5 pt-5'>
            <div className='loader d-flex  mt-5 pt-5 '>
                
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default Privaterouter;