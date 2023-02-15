import React from 'react';
import Advatige from './Advatige/Advatige';
import Banar from './Banar';
import MostPopular from './MostPopular/MostPopular';
import PeopleCommitnt from './MySection/PeopleCommitnt';
import SecondHandProductCatagory from './SecondHandProductCatagory/SecondHandProductCatagory';



const Explore = () => {
    return (
        <div className='container'>
            <Banar></Banar>
            <MostPopular bgimg={1} title={"Most Propular"}></MostPopular>
            <MostPopular title={"Today’s Top Listing"}></MostPopular>
            <Advatige></Advatige>
        </div>
    );
};

export default Explore;