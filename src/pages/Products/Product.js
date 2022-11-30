import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Product = () => {
    const {catagory,result}= useLoaderData();
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>{catagory}</h1>
             <Row xs={1} md={2} lg={3} className="g-4">
      {result?.map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default Product;