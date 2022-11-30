import React from 'react';

const AllBuyer = () => {
    const myProducts = [1, 3, 4, 333, 3, 333]
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
                        <th>Verifyed</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myProducts?.map((product, i) => <tr>
                            <td className='ps-3'>{i + 1}</td>
                            <td>
                                <p class="fw-normal mb-1">sajim</p>
                            </td>
                            <td>sajim@gmail.com</td>
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

export default AllBuyer;