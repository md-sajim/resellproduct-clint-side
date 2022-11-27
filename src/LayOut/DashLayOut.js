import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../shard/Navber';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const DashLayOut = () => {


    return (
        <>
            <Navber></Navber>
            <>
                <h5 className='text-center text-decoration-underline mt-2 h4'>Seller</h5>
                <div className='d-flex justify-content-center mt-3'>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary"><Link className='text-white text-decoration-none'>Add Product</Link></Button>
                        <Button variant="primary"><Link className='text-white text-decoration-none'>My Product</Link></Button>
                    </ButtonGroup>
                </div>
            </>
            <Outlet></Outlet>
        </>
    );

};

export default DashLayOut;