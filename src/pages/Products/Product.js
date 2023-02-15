import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';



const Product = () => {
    const { user } = useContext(AuthContext)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [pImg, setPImg] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const location = from.location.value;
        const allInfo = { name, email, phone, location, productName, productPrice, pImg }
        fetch("https://resell-product-server-nu.vercel.app/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success('bookes success')
                    setShow(false)
                }
            })
            .catch(err => {
                toast.error("booked faild")
            })
    };

    const handalClosebutton = () => {
        setShow(false)
    }
    const handleShow = (name, price, img) => {
        setProductName(name)
        setProductPrice(price)
        setPImg(img)

        setShow(true)
    };
    const { catagory, result } = useLoaderData();
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>{catagory}</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {result?.map((data) =>
                    <Col
                        key={data._id}
                    >

                        <Card style={{ height: "680px" }}>
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
                            <Button onClick={() => handleShow(data.productName, data.resellPrice, data.img)} variant="secondary">BOOK NOW</Button>
                        </Card>
                    </Col>
                )}
            </Row>
            <>

                <Modal
                    show={show}
                    onHide={handalClosebutton}
                    backdrop="static"
                    keyboard={false}
                >
                    <form onSubmit={(e) => handleClose(e)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{productName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5 className='mb-3'>Price: {productPrice}</h5>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col className='mb-3' sm="12">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control defaultValue={user.displayName} name='name' type="text" placeholder="Your Name" required />
                                </Col>
                                <Col className='mb-3' sm="12">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control defaultValue={user.email} name='email' type="email" placeholder="Your email" required disabled />
                                </Col>
                                <Col className='mb-3' sm="12">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control name='phone' type="number" placeholder="Your phone" required />
                                </Col>
                                <Col className='mb-3' sm="12">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control name='location' type="text" placeholder="Location" required />
                                </Col>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='submit' variant="secondary">
                                BOOKED
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>

        </div>
    );
};

export default Product;