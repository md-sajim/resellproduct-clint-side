import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shard/Footer';
import Navber from '../shard/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;