import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContex } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';
    const {SignInExitingUser,SetError,user,displayError,ContinueWithGoogle,ContinueWithGithub} = useContext(AuthContex);
    const handleSubmit = event => {
        event.preventDefault();
        SetError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        SignInExitingUser(email,password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange-300">Login now!</h1>
                    <p className="py-6">If You get Our New Updated And More Information Then You Must be Able our Membership</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required placeholder="email" className="input input-bordered" name='email'/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required placeholder="password" className="input input-bordered" name='password' />
                            <label className="label">
                                <Link to='/resetPassword' className="label-text-alt link link-hover">Forgot password?</Link>
                                <Link to='/register' className="label-text-alt link link-hover">Are You new to? Register here</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>{displayError}</p>
                            <p className='text-center text-xl'>Or</p>
                            <button onClick={ContinueWithGoogle} className='btn  btn-outline btn-primary w-full my-2'><FaGoogle></FaGoogle> <span className='ml-3'>Continue With Google</span> </button>
                            <button onClick={ContinueWithGithub} className='btn  btn-outline btn-warning w-full'> <FaGithub></FaGithub> <span className='ml-3'> Continue With Github</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;