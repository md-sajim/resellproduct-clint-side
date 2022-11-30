import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
const {data:allbuyer=[]}= useQuery({
    queryKey:["allbuyer"],
    queryFn:async()=>{
        const res = await fetch('http://localhost:5000/allbuyer');
        const data = await res.json();
        return data;
    }
})
    return (
        <div style={{ backgroundColor: "orange", height: "100%" }} className='container pb-5'>
            <h1 className='my-5'>All Buyers</h1>
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delet</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allbuyer?.map((buyer, i) => <tr>
                            <td className='ps-3'>{i + 1}</td>
                            <td>
                                <p class="fw-normal mb-1">{buyer.name}</p>
                            </td>
                            <td>{buyer.email}</td>
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

export default AllBuyer;