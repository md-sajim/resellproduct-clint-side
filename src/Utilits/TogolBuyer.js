import React, { useContext, useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagramSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Togolbuyer = () => {
    const { createAccout } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loginErr, setLoginErr] = useState('')
    // access token ar jonno ai start naya hoyaca!!
    const [loginEmail, setLoginEmail] = useState('');
    const onSubmit = data => {
        createAccout(data.email, data.pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                createUserDatabase(data.name,data.email)

            })
            .catch(err => {
                setLoginErr(err.code.slice(5,))
            })
    };
    const createUserDatabase = (name,email)=>{
        const user = {
            name,
            email,
            role:"buyer"
        }
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // setCreatedUserEmail(email)
                    toast.success("usre create success")
                }
            })
            .catch(err => toast.error(err))
    }
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input {...register("name", { required: "Enter your email" })} type="text" className="form-control" />
                    <label className="form-label" htmlFor="loginName">User name</label>
                </div>
                <div className="form-outline mb-4">
                    <input {...register("email", { required: "Please enter your email" })} type="email" className="form-control" />
                    <label className="form-label" htmlFor="loginName">Email or username</label>
                </div>


                <div className="form-outline mb-4">
                    <input {...register("pass", {
                        required: "Please enter your password...",
                        minLength: {
                            value: 8,
                            message: "password menimum 8 digits"
                        }
                    })} type="password" className="form-control" />
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                </div>
                {errors.pass && <span className='text-danger'>{errors.pass.message}</span>}
                {loginErr && <span className='text-danger'>{loginErr}</span>}


                <button type="submit" className="btn btn-primary btn-block mb-4">Buyer SignIn</button>


                <div className="text-center">
                    <p>Allredy have an account? <Link to='/login'>Please Login</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Togolbuyer;