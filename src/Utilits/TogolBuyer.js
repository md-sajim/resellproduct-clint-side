import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Togolbuyer = () => {
    return (
        <div >
            <form>
                <div className="text-center mb-3">
                    <p>Register for Buyer</p>
                    <p>Sign in with:</p>
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


                <div className="form-outline mb-4">
                    <input type="email" id="Name" className="form-control" />
                    <label className="form-label" htmlFor="loginName">User name</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="loginName" className="form-control" />
                    <label className="form-label" htmlFor="loginName">Email or username</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="loginPassword" className="form-control" />
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                </div>


                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">

                        <div className="form-check mb-3 mb-md-0">
                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">

                        <a href="#!">Forgot password?</a>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary btn-block mb-4">Buyer SignIn</button>


                <div className="text-center">
                    <p>Allredy have an account? <Link to='/login'>Please Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Togolbuyer;