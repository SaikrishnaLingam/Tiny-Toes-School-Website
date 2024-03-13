import React from 'react'
import logo from '../assests/imgs/logo.png'

const Header = () => {
    return (
        <header>
            <nav className="grid px-8">
                <div className='flex items-baseline justify-between'>
                    <img src={logo} alt='Tiny Toes Logo' className='w-1/4' />

                    {/* Navigation Links */}
                    <div className="flex">
                        <span className="mr-20 font-semibold">Home</span>
                        <span className="mr-20 font-semibold">About Us</span>
                        <span className="mr-20 font-semibold">Our Curriculum</span>
                        <span className="mr-20 font-semibold">Gallery</span>
                        <span className="mr-20 font-semibold">Contact Us</span>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header