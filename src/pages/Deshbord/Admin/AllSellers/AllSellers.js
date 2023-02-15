import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: allseller = [] } = useQuery({
        queryKey: ["allseller"],
        queryFn: async () => {
            const res = await fetch('https://resell-product-server-nu.vercel.app/allseller');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div style={{ backgroundColor: "orange", height: "100%" }} className='container pb-5'>
            <h1 className='my-5'>All Sellers</h1>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
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
                        allseller?.map((seller, i) => <tr
                            key={seller._id}
                        >
                            <td className='ps-3'>{i + 1}</td>
                            <td>
                                <p className="fw-normal mb-1">{seller.name}</p>
                            </td>
                            <td>{seller.email}</td>
                            <td>
                                <button type="button" className="btn btn-danger  btn-sm btn-rounded">
                                    Delet
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-success  btn-sm btn-rounded">
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