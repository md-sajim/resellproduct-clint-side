import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login&Register.css'

const Login = () => {
    return (
        <div className='d-flex my-5 py-5 justify-content-center'>
            <div className="tab-content p-3" style={{ backgroundColor: '#73008c' }}>
                <form >
                    <div className="text-center mb-3">
                       <h3 className='text-white'>Login!</h3>
                        <p>Log in with:</p>
                        <button type="button" className="btn btn-primary btn-floating mx-1">
                            <FaFacebookF />
                        </button>

                        <button type="button" className="btn btn-primary btn-floating mx-1">
                            <FaTwitter />
                        </button>

                        <button type="button" className="btn btn-primary btn-floating mx-1">
                            <FaGoogle />
                        </button>

                        <button type="button" className="btn btn-primary btn-floating mx-1">
                            <FaInstagramSquare />
                        </button>
                    </div>

                    <p className="text-center">or:</p>

                    <div className="form-outline mb-2">
                        <input type="email" id="loginName" className="form-control" />
                        <label className="form-label" htmlFor="loginName">Email or username</label>
                    </div>


                    <div className="form-outline ">
                        <input type="password" id="loginPassword" className="form-control" />
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                    </div>


                    <div className="row mb-4">
                        

                        <div className="col-md-12 d-flex justify-content-center">

                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>


                    <div className="text-center">
                        <p>new in HomeFurniture? <Link to='/register'>Register now</Link></p>
                    </div>
                </form>
                <p><span className="badge bg-warning text-dark">Seller login use only Email and Password !!!</span></p>
            </div>
        </div>
    );
};

export default Login;