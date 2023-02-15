import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../shard/Navber';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const DashLayOut = () => {
    const { user } = useContext(AuthContext)
    const [delet, setDelet] = useState('')
    const [carrantUser, setCarrantUser] = useState({})
    const [myProducts, setMyProducts] = useState([])


    useEffect(() => {

        fetch(`https://resell-product-server-nu.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCarrantUser(data))
    }, [user])

    useEffect(() => {
        fetch(`https://resell-product-server-nu.vercel.app/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user])
    const { data: deletProduct = [] } = useQuery({
        queryKey: [delet],
        queryFn: async () => {
            const res = await fetch(`https://resell-product-server-nu.vercel.app/orderdelete/${delet}`, {
                method: 'DELETe'
            })
            const data = await res.json();
            return data;
        }
    })
    if (deletProduct.acknowledged) {
        fetch(`https://resell-product-server-nu.vercel.app/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }
    return (
        <div className='pb-5' style={{ backgroundColor: "whitesmoke" }}>
            <Navber></Navber>
            {
                carrantUser?.role === "admin" && <>
                    <h5 className='text-center text-decoration-underline mt-2 h4'>Admin panal</h5>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary"><Link to='/dashbore/allseller' className='text-white text-decoration-none'>All seller</Link></Button>
                            <Button variant="secondary"><Link to='/dashbore/allbuyer' className='text-white text-decoration-none'>All buyer</Link></Button>
                        </ButtonGroup>
                    </div>
                </>
            }
            {
                carrantUser?.role === "seller" && <>
                    <h5 className='text-center text-decoration-underline mt-2 h4'>Seller</h5>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary"><Link to='/dashbore/addproduct' className='text-white text-decoration-none'>Add Product</Link></Button>
                            <Button variant="secondary"><Link to='/dashbore/myproduct' className='text-white text-decoration-none'>My Product</Link></Button>
                            <Button variant="secondary"><Link to='/dashbore/mybuyers' className='text-white text-decoration-none'>My buyer</Link></Button>
                        </ButtonGroup>
                    </div>
                </>
            }
            {
                carrantUser?.role === "buyer" && <>
                    <div style={{ backgroundColor: "orange", height: "100%" }} className='container pb-5'>
                        <h1 className='my-5'>MY Order</h1>
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th></th>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>BOOKED</th>
                                    <th>Delet</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myProducts?.map((product, i) => <tr
                                        key={product._id}
                                    >
                                        <td className='ps-3'>{i + 1}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={product.pImg}
                                                    alt=""
                                                    style={{ width: "55px", height: "55px" }}
                                                    className="rounded"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">{product.productName
                                            }</p>
                                            <p className="fw-normal mb-1">Price:{product.productPrice}</p>
                                        </td>

                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded">
                                                BOOKED
                                            </button>

                                        </td>
                                        <td>
                                            <button onClick={() => setDelet(product._id)} type="button" className="btn btn-danger  btn-sm btn-rounded">
                                                CANCEL
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </>
            }
            <Outlet></Outlet>
        </div>
    );

};

export default DashLayOut;