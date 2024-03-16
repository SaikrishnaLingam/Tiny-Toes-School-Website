import React from 'react'
import logo from '../assests/imgs/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="w-24 md:w-32 lg:w-48 xl:w-64">
            <Link to="/">
                <button className='cursor-pointer'>
                    <img src={logo} alt="Tiny Toes Logo" className="w-full h-auto" />
                </button>
            </Link>
        </div>
    );
}

export default Logo