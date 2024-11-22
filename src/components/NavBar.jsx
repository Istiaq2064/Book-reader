import React from 'react';
import UserIcon from '../assets/user.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div>

           </div>
           <div className="nav space-x-4">
            <Link>Home</Link>
            <Link>Career</Link>
            <Link>About</Link>
           </div>
           <div className="login flex items-center space-x-2">
            <div>
                <img src={UserIcon} alt="" />
            </div>
            <div>
                <button className='btn btn-neutral rounded-none'>Log In</button>
            </div>
           </div>
        </div>
    );
};

export default NavBar;