import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ToggoleSeller from '../../Utilits/ToggoleSeller';
import Togolbuyer from '../../Utilits/TogolBuyer';



import './Login&Register.css'

const Reagister = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className='found-container-segister d-flex align-items-center justify-content-center'>
            <div className=' w-lg-25 w-md-100 w-sm-100'>

                <ul className="nav nav-pills nav-justified  bg-secondary" id="ex1" role="tablist">
                    <li className="nav-item bg-primary">
                        <button onClick={() => setToggle(true)} type="button" class="btn btn-primary w-100 ">Buyer</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => setToggle(false)} type="button" class="btn btn-secondary w-100">Seller</button>
                    </li>
                </ul>

                <div className="tab-content p-5" style={{ backgroundColor: '#73008c' }}>
                    {
                        toggle ? <Togolbuyer></Togolbuyer> : <ToggoleSeller></ToggoleSeller>
                    }



                </div>
            </div>
        </div>
    );
};

export default Reagister;