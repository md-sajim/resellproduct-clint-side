import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const ToggoleSeller = () => {
    const { createAccout } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loginErr, setLoginErr] = useState('');
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
    }
    const createUserDatabase = (name,email)=>{
        const user = {
            name,
            email,
            role:"seller"
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mb-3">
                    <p>Register for Seller</p>
                </div>


                <div className="form-outline mb-4">
                    <input {...register("name", { required: "Enter your email" })} type="text" id="registerUsername" className="form-control" />
                    <label className="form-label" htmlFor="registerUsername">Username</label>
                </div>


                <div className="form-outline mb-4">
                    <input {...register("email", { required: "Please enter your email" })} type="email" id="registerEmail" className="form-control" />
                    <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>


                <div className="form-outline mb-4">
                    <input {...register("pass", {
                        required: "Please enter your password...",
                        minLength: {
                            value: 8,
                            message: "password menimum 8 digits"
                        }
                    })} type="password" id="registerPassword" className="form-control" />
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>
                {errors.pass && <span className='text-danger'>{errors.pass.message}</span>}
                {loginErr && <span className='text-danger'>{loginErr}</span>}


                <div className="form-check d-flex justify-content-center mb-4">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="registerCheck"

                        aria-describedby="registerCheckHelpText"
                    />
                    <label className="form-check-label" htmlFor="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>


                <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
            </form>
        </div>
    );
};

export default ToggoleSeller;