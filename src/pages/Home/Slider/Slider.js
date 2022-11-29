import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/slider img/living room.jpg'
import img2 from '../../../assets/slider img/living room1.jpg'
import img3 from '../../../assets/slider img/living room2.jpg'

const Slider = () => {
    const slider = [
        {id:1,img:img1},
        {id:2,img:img2},
        {id:3,img:img3}
    ]
    return (
        <Carousel>
        
        {
            slider.map(slid =><Carousel.Item>
                <img
                style={{height:"60vh"}}
                  className="d-block w-100"
                  src={slid.img}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>)
        }
      </Carousel>
    );
};

export default Slider;