import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Nabvar = () => {
    const { user,LogoutUser } = useContext(AuthContex);
    console.log(user);
    return (
        <div className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/blog'>Blogs</Link>
                        <Link to='/about'>About Us</Link>
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-3xl text-orange-200">Unique Chef</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-3xl px-1 text-orange-200">
                    
                    <NavLink
                    to='/'
                    style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                        };
                      }}
                    >Home</NavLink>
                    <NavLink
                    to='/blog'
                    style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                        };
                      }}
                    > <span className='mx-4'>Blogs</span> </NavLink>
                    
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full className='mx-2'">
                            {user?.photoURL &&
                                <div>
                                    <img src={user?.photoURL} alt="User Profile "/>
                                </div>
                            }
                        </div>
                    </label>
                </ul>
            </div>
            <div className="navbar-end">
                { user &&
                    <button onClick={LogoutUser} className='btn btn-danger'>Logout</button>}
                {!user &&
                    <Link to='/login'><button className='btn btn-danger'>Login</button></Link>}

            </div>
        </div>
    );
};

export default Nabvar;