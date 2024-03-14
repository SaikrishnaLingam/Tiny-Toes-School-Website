import React from 'react'
import logo from '../assests/imgs/logo.png';

const Logo = () => {
    return (
        <div className="w-24 md:w-32 lg:w-48 xl:w-64">
            <img src={logo} alt="Tiny Toes Logo" className="w-full h-auto" />
        </div>
    );
}

export default Logo