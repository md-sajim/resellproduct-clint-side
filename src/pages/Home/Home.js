import React from 'react';
import Advatige from './Advatige/Advatige';
import SecondHandProductCatagory from './SecondHandProductCatagory/SecondHandProductCatagory';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='container'>
            <Slider></Slider>
            <Advatige></Advatige>
            <SecondHandProductCatagory></SecondHandProductCatagory>
        </div>
    );
};

export default Home;