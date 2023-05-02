import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";

const Register = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const fullName = form.fullName.value;
        const password = form.password.value;
        console.log(fullName,email,password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-300">Register Now!</h1>
                    <p className="py-6">If You get Our New Updated And More Information Then You Must be Able our Membership</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p><small>Alredy have an Account? <Link className="label-text-alt link link-hover" to='/login'>Login</Link> </small></p>
                            </label>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn btn-primary">Register Now</button>
                        </div>
                        <div>
                            <p className='text-center text-xl'>Or</p>
                            <button className='btn  btn-outline btn-primary w-full my-2'><FaGoogle></FaGoogle> <span className='ml-3'>Continue With Google</span> </button>
                            <button className='btn  btn-outline btn-warning w-full'> <FaGithub></FaGithub> <span className='ml-3'> Continue With Github</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;