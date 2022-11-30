import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data:allseller=[]}= useQuery({
        queryKey:["allseller"],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/allseller');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div style={{ backgroundColor: "orange", height: "100%" }} className='container pb-5'>
            <h1 className='my-5'>All Sellers</h1>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delet</th>
                        <th>Verifyed</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allseller?.map((seller, i) => <tr>
                            <td className='ps-3'>{i + 1}</td>
                            <td>
                                <p class="fw-normal mb-1">{seller.name}</p>
                            </td>
                            <td>{seller.email}</td>
                            <td>
                                <button type="button" class="btn btn-danger  btn-sm btn-rounded">
                                    Delet
                                </button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success  btn-sm btn-rounded">
                                    Verify
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;