import React from 'react';

const ToggoleSeller = () => {
    return (
        <div>
            <form>
                <div className="text-center mb-3">
                    <p>Register for Seller</p>
                </div>


                <div className="form-outline mb-4">
                    <input type="text" id="registerUsername" className="form-control" />
                    <label className="form-label" htmlFor="registerUsername">Username</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="email" id="registerEmail" className="form-control" />
                    <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="registerPassword" className="form-control" />
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>


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