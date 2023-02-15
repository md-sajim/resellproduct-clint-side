import React, { useContext, useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login&Register.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [loginErr, setLoginErr] = useState('')
    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || "/"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        login(data.email, data.pass)
            .then(result => {
                navigat(from, { replace: true })


            })
            .catch(err => {
                setLoginErr(err.code.slice(5,))
            })
    };
    return (
        <div className='d-flex my-5 py-5 justify-content-center'>
            <div className="tab-content p-3" style={{ backgroundColor: '#73008c' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input {...register("email", { required: "Enter your email" })} type="email" className="form-control" />
                        <label className="form-label" htmlFor="loginName">Email or username</label>
                    </div>


                    <div className="form-outline ">
                        <input {...register("pass", {
                            required: "Please enter your password...",
                            minLength: {
                                value: 8,
                                message: "password menimum 8 digits"
                            }
                        })} type="password" className="form-control" />
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                    </div>


                    <div className="row mb-4">


                        <div className="col-md-12 d-flex justify-content-center">

                            <a href="#!">Forgot password?</a>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            {errors.pass && <span className='text-danger'>{errors.pass.message}</span>}
                            {loginErr && <span className='text-danger'>{loginErr}</span>}
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