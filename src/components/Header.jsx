import React from 'react';
import logo from '../assests/imgs/logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => {
    return (
        <div className="w-100px lg:w-1/4">
            <img src={logo} alt="Tiny Toes Logo" />
        </div>
    );
};

const NavBarItems = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 font-semibold items-center">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/about-us" className="nav-link">
                About Us
            </NavLink>
            <NavLink to="/our-curriculum" className="nav-link">
                Our Curriculum
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
                Gallery
            </NavLink>
            <NavLink to="/contact-us" className="nav-link">
                Contact Us
            </NavLink>
        </div>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex flex-row w-full justify-between items-center py-4 px-8 lg:px-12">
                <Logo />
                <div className="lg:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-row">
                    <NavBarItems />
                </div>

            </nav>

            {isOpen && (
    <div className="lg:hidden">
        <div className="flex items-center justify-center top-0 left-0 w-full bg-pink-100">
            <NavBarItems />
        </div>
    </div>
)}
        </>
    );
};

const Header = () => {
    return (
        <header className="top-0 z-[20] mx-auto flex-wrap w-full items-center justify-between px-8 lg:px-32">
            <NavBar />
        </header>
    );
};

export default Header;
