import React from 'react';
import banar from '../../assets/banarImg/banarImg.jpg'
import { FaSquareFull } from 'react-icons/fa';
import './Banar.css'

const Banar = () => {
    return (
        <div id='show_bg_2'>
            <h1 id='hader_1'>Elevate your space with</h1>
            <h1 id='hader_2'>Pre-loved Treasures<span id='dotstyle'><FaSquareFull/></span></h1>
            <p>At our store, you will discover an array of one-of-a-kind furnishings that are beautiful <br /> and budget-friendly. With our pre-loved treasures, you can transform your home into <br /> a personalized oasis that reflects your individual style without breaking the bank.</p>
            <div className='d-flex align-items-center banar-btn'>
                <button>Login</button>
                <p>-or-</p>
                <button>Sign Up</button>
            </div>
            <p id='seller-here'>for sellers go <span>Here</span></p>
        </div>
    );
};

export default Banar;