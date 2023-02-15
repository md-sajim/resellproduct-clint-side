import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Advatige = () => {
    const { data = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('https://resell-product-server-nu.vercel.app/advatige');
            const data = await res.json();
            return data;
        }
    })
    return (
        <>
            {
                data?.length ? <div className='my-5'>
                    <h1 className='text-center mb-4'>Advatige</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {data.map((dataAd, idx) => 
                            <Col key={dataAd._id}>
                                <Card>
                                    <Card.Img style={{ height: "300px" }} variant="top" src={dataAd.img} />
                                    <Card.Body>
                                        <Card.Title>{dataAd.productName.slice(0, 15)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div> : <div></div>
            }
        </>
    );
};

export default Advatige;