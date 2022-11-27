import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear()
    return (
        <div className='bg-dark py-5 row m-0 text-secondary'>

            <div className='col-12 d-flex align-items-center justify-content-center '>
                <a className="btn text-white" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                    <FaFacebookF />
                </a>
                <a className="btn text-white ms-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                    <FaTwitter />
                </a>
                <a className="btn text-white ms-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">

                    <FaGoogle />
                </a>
                <a className="btn text-white ms-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">

                    <FaInstagramSquare />
                </a>


            </div>
            <div className='col-12 mt-5 d-flex align-items-center justify-content-center '>
                <p><small className='text-white'>&copy; {year}  Sajim. All rights reserved.</small></p>
            </div>

        </div>
    );
};

export default Footer;