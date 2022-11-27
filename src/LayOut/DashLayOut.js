import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../shard/Navber';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../context/AuthProvider';

const DashLayOut = () => {
    const { user, loding } = useContext(AuthContext)
    const [carrantUser, setCarrantUser] = useState()
    console.log(carrantUser)

    useEffect(() => {

        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCarrantUser(data))
    }, [user])


    return (
        <>
            <Navber></Navber>
            {
                carrantUser?.role === "admin" && <>
                    <h5 className='text-center text-decoration-underline mt-2 h4'>Admin panal</h5>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary"><Link className='text-white text-decoration-none'>All seller</Link></Button>
                            <Button variant="primary"><Link className='text-white text-decoration-none'>All buyer</Link></Button>
                        </ButtonGroup>
                    </div>
                </>
            }
            {
                carrantUser?.role === "seller" && <>
                    <h5 className='text-center text-decoration-underline mt-2 h4'>Seller</h5>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary"><Link className='text-white text-decoration-none'>Add Product</Link></Button>
                            <Button variant="primary"><Link className='text-white text-decoration-none'>My Product</Link></Button>
                            <Button variant="secondary"><Link className='text-white text-decoration-none'>My buyer</Link></Button>
                        </ButtonGroup>
                    </div>
                </>
            }
            {
                carrantUser?.role === "buyer" && <>
                    <h5 className='text-center text-decoration-underline mt-2 h4'>user</h5>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary"><Link className='text-white text-decoration-none'>My Order</Link></Button>
                        </ButtonGroup>
                    </div>
                </>
            }
            <Outlet></Outlet>
        </>
    );

};

export default DashLayOut;