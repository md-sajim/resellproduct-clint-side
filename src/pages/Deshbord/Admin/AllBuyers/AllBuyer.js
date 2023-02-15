import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const AllBuyer = () => {
    const [buyerDelet, setBuyerDelet] = useState('')
    const { data: allbuyer = [], refetch } = useQuery({
        queryKey: ["allbuyer"],
        queryFn: async () => {
            const res = await fetch('https://resell-product-server-nu.vercel.app/allbuyer');
            const data = await res.json();
            return data;
        }
    })
    const { data: deletbuyer = [] } = useQuery({
        queryKey: [buyerDelet],
        queryFn: async () => {
            const res = await fetch(`https://resell-product-server-nu.vercel.app/buyerdelete/${buyerDelet}`, {
                method: 'DELETe'
            })
            const data = await res.json();
            return data;
        }
    })
    if (deletbuyer.acknowledged) {
        refetch();

    }
    return (
        <div style={{ backgroundColor: "orange", height: "100%" }} className='container pb-5'>
            <h1 className='my-5'>All Buyers</h1>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delet</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allbuyer?.map((buyer, i) => <tr
                            key={buyer._id}
                        >
                            <td className='ps-3'>{i + 1}</td>
                            <td>
                                <p className="fw-normal mb-1">{buyer.name}</p>
                            </td>
                            <td>{buyer.email}</td>
                            <td>
                                <button onClick={() => setBuyerDelet(buyer._id)} type="button" className="btn btn-danger  btn-sm btn-rounded">
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