import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProduct = () => {
    const { user, loding } = useContext(AuthContext)
    const [myProducts, setMyProducts] = useState()
    console.log(myProducts)

    useEffect(() => {

        fetch(`http://localhost:5000/product?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user])
    if (loding) {
        return <p>loding...</p>
    }
    const advatigeMent = id =>{
        console.log(id)

    }
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
                                    product.avialabol? <span class="badge badge-success rounded-pill bg-success">Availabol</span>:<span class="badge badge-success rounded-pill d-inline bg-danger">Sold</span>
                                }
                                
                            </td>
                            <td>
                                <button onClick={()=>advatigeMent(product._id)} type="button" class="btn btn-primary  btn-sm btn-rounded">
                                    Advatige
                                </button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger  btn-sm btn-rounded">
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