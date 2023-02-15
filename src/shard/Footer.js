import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagramSquare, FaFacebook, FaInstagram, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear()
    return (
        <div style={{ backgroundColor: "rgba(218, 165, 32, 0.071)" }} className='pt-3 d-flex row  m-0'>
            <div className="col-6">
                <h6 style={{ fontSize: "18px" }} className='text-center'><b>Payment Methods</b></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <FaCcMastercard style={{ color: "#FCA129", fontSize: "27px" }} />
                    <FaCcPaypal style={{ color: "#FCA129", fontSize: "27px", margin: "0 20px" }} />
                    <FaCcVisa style={{ color: "#FCA129", fontSize: "27px" }} />
                </div>
                <div className='footer-text'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Orci purus felis interdum integer nulla mi. Dui praesent ac libero faucibus porttitor. Mi tempus proin orci eget viverra adipiscing. Non ut sit sed velit quis massa.</p>
                </div>
            </div>
            <div className="col-6">
                <h6 style={{ fontSize: "18px" }} className='text-center'><b>Follow Us On</b></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <FaFacebook style={{ color: "#FCA129", fontSize: "27px" }} />
                    <FaTwitter style={{ color: "#FCA129", fontSize: "27px", margin: "0 20px" }} />
                    <FaInstagram style={{ color: "#FCA129", fontSize: "27px" }} />
                </div>
                <div className='footer-text'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Orci purus felis interdum integer nulla mi. Dui praesent ac libero faucibus porttitor. Mi tempus proin orci eget viverra adipiscing. Non ut sit sed velit quis massa.</p>
                </div>
            </div>
            <div className='col-12 d-flex align-items-center justify-content-center '>
                <p><small style={{ fontWeight: "400", fontSize: "10px", lineHeight: "14px", color: "#FCA129" }} className=''>&copy; {year}  Sajim. All rights reserved.</small></p>
            </div>

        </div>
    );
};

export default Footer;