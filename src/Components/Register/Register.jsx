import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-300">Register Now!</h1>
                    <p className="py-6">If You get Our New Updated And More Information Then You Must be Able our Membership</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Full Name</span>
                            </label>
                            <input type="text" placeholder="What Is Your Name?" className="input input-bordered" name='fullName' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Put Link Here" className="input input-bordered" name='photoLink' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p><small>Alredy have an Account? <Link className="label-text-alt link link-hover" to='/login'>Login</Link> </small></p>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                        <div>
                            <p className='text-center text-xl'>Or</p>
                            <button className='btn  btn-outline btn-primary w-full my-2'>Continue With Google</button>
                            <button className='btn  btn-outline btn-warning w-full'>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;