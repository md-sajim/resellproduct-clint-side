import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const SecondHandProductCatagory = () => {
   const catagorys =[
    {id:1,catagoryName:"Living Room"},
    {id:2,catagoryName:"Kitchin"},
    {id:3,catagoryName:"Bedroom"},
    {id:4,catagoryName:"Diningroom Furmiture"}
   ]
    return (
        <>
            <h1 className='text-center mb-3'>Product Category</h1>
            <div className='d-flex justify-content-center'>
                <ButtonGroup aria-label="Basic example ">
                    {
                        catagorys.map(catagory => <Button 
                            key={catagory.id}
                            variant="secondary"><Link
                        to={`/produts/${catagory.id}/${catagory.catagoryName}`}
                        className='text-decoration-none text-white'
                        >{catagory.catagoryName}</Link></Button>)
                    }

                </ButtonGroup>
            </div>
        </>

    );
};

export default SecondHandProductCatagory;