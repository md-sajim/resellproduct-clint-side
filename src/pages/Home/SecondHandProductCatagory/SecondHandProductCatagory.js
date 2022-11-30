import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SecondHandProductCatagory = () => {
    const { data: catagorys = [] } = useQuery({
        queryKey: ["catagory"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/catagory');
            const data = await res.json();
            return data;
        }
    })
    return (
        <>
            <h1 className='text-center mb-4'>Product Category</h1>
            <div className='d-flex justify-content-center'>
                <ButtonGroup aria-label="Basic example ">
                    {
                        catagorys.map(catagory => <Button variant="secondary">{catagory.catagoryName}</Button>)
                    }

                </ButtonGroup>
            </div>
        </>

    );
};

export default SecondHandProductCatagory;