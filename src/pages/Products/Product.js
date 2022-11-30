import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const Product = () => {
    const { catagory, result } = useLoaderData();
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>{catagory}</h1>
            <Row  xs={1} md={2} lg={3} className="g-4">
                {result?.map((data) => (
                    <Col >
                        <Card style={{height:"680px"}}>
                            <Card.Img style={{ height: "250px" }} variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>Product Name : {data.productName}</Card.Title>
                                <Card.Text>Location : {data.location}</Card.Text>
                                <Card.Text>Orginal Price : {data.orginalPrice}</Card.Text>
                                <Card.Text>Resell Price : {data.resellPrice}</Card.Text>
                                <Card.Text>Purchase Year : {data.purchase}</Card.Text>
                                <Card.Text>Post Time : {data.time}</Card.Text>
                                <Card.Text>Seller Name : {data.name}</Card.Text>
                                <Card.Text>Phone : {data.number}</Card.Text>
                                <Card.Text>email : {data.email}</Card.Text>
                            </Card.Body>
                                <Button variant="secondary">Secondary</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Product;