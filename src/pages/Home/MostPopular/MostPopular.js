import React from 'react';
import { Link } from 'react-router-dom';
import './MostPopular.css';
import cardImg from '../../../assets/CARDIMG/pexels-pixabay-271816.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';

const MostPopular = ({title, bgimg}) => {
    const array = ["cardsmill", "cardbig", "cardsmill",]
    return (
        <div className='overflow-hidden'>
            <div id='populer-header'>
                <h1>{title}</h1>
                <Link><i>See all</i></Link>
            </div>
            <Row xs={1} md={2} lg={3} className={`g-4 p-5 ${bgimg? "bgimg" : "bgimg1"}`}>
                {array.map((_, idx) => (
                    <Col className='d-flex justify-content-center'>
                        <Card className={_}>
                            <Card.Img variant="top" src={cardImg} />
                            <div className='px-3 pt-3 d-flex justify-content-between align-items-center'>
                                <p>Price: <span>100$</span><br />
                                Location: <span>Dhaka</span></p>
                                <span id='like-heart'><FaRegHeart></FaRegHeart></span>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default MostPopular;