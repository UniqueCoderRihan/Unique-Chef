import React, { useContext } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const ForgetPassword = () => {
    const {handleForget,displayError}= useContext(AuthContex);
    const handleForgetBtn = event=>{
        event.preventDefault()
        const email = (event.target.email.value);
        handleForget(email)
        
    }
    return (
        <form onSubmit={handleForgetBtn} className='hero min-h-screen bg-base-200'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Send Link </button>
                </div>
            </div>

        </form>
    );
};

export default ForgetPassword;