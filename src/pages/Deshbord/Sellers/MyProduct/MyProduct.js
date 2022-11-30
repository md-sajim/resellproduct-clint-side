import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [myProducts, setMyProducts] = useState()
    const [advatigement, setAdvatigement] = useState('')
    const [delet, setDelet] = useState('')
    const { data: advitigeData = [] } = useQuery({
        queryKey: [advatigement],
        queryFn: async () => {
            const res = await fetch(`https://resell-product-server-nu.vercel.app/advatige/${advatigement}`, {
                method: 'PUT'
            })
            const data = await res.json();
            return data;
        }
    })
    const { data: deletProduct = [] } = useQuery({
        queryKey: [delet],
        queryFn: async () => {
            const res = await fetch(`https://resell-product-server-nu.vercel.app/delete/${delet}`, {
                method: 'DELETe'
            })
            const data = await res.json();
            return data;
        }
    })
    if (advitigeData.acknowledged || deletProduct.acknowledged) {
        fetch(`https://resell-product-server-nu.vercel.app/myproduct?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))

    }

    useEffect(() => {
        fetch(`https://resell-product-server-nu.vercel.app/myproduct?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user])
    console.log(deletProduct)
    return (
        <div style={{ backgroundColor: "orange", height: "100%" }} className='container pb-5'>
            <h1 className='my-5'>MY PRODUCT</h1>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Aviable/Sold</th>
                        <th>Advatige</th>
                        <th>Delet</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myProducts?.map((product, i) => <tr>
                            <td className='ps-3'>{i + 1}</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img
                                        src={product.img}
                                        alt=""
                                        style={{ width: "55px", height: "55px" }}
                                        class="rounded"
                                    />
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">{product.productName
                                }</p>
                            </td>
                            <td>
                                {
                                    product.avialabol ? <span class="badge badge-success rounded-pill bg-success">Availabol</span> : <span class="badge badge-success rounded-pill d-inline bg-danger">Sold</span>
                                }

                            </td>
                            <td>
                                {
                                    product.advatige ? <button type="button" class="btn btn-primary  btn-sm btn-rounded">
                                        Allrady Advatige
                                    </button> : <button onClick={() => setAdvatigement(product._id)} type="button" class="btn btn-primary  btn-sm btn-rounded">
                                        Advatige
                                    </button>
                                }
                            </td>
                            <td>
                                <button onClick={() => setDelet(product._id)} type="button" class="btn btn-danger  btn-sm btn-rounded">
                                    Delet
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;