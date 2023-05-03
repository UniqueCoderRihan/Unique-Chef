import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Nabvar = () => {
    const { user,LogoutUser } = useContext(AuthContex);
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
                    <Link to='/'>Home</Link>
                    <Link className='mx-4' to='/blog'>Blogs</Link>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full className='mx-2'">
                            <img src="https://scontent.fcgp32-1.fna.fbcdn.net/v/t39.30808-6/343562529_1850575275326196_3198939309385702606_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGrtHVNj9AMag3gkBUFg6CJy46jFL_7pdDLjqMUv_ul0L2CYjCosXoa5BnsYfAcnga7047-kIA_eIeL0hYMF8cC&_nc_ohc=xGL05SUiNgcAX_JfGZ7&_nc_ht=scontent.fcgp32-1.fna&oh=00_AfB7eV56NXF9KZVPTudAzeX19Z2B8qQXcLaW6RC-VGx6xQ&oe=64544442" />
                        </div>
                    </label>
                </ul>
            </div>
            <div className="navbar-end">
                {user &&
                    <><button onClick={LogoutUser} className='btn btn-danger'>Logout</button></>}
                {!user &&
                    <> <Link to='/login'><button className='btn btn-danger'>Login</button></Link> </>}

            </div>
        </div>
    );
};

export default Nabvar;