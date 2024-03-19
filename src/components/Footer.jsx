import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/imgs/logo.png';
import smiley from '../assests/imgs/smiley.jpeg';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional - adds smooth scrolling animation
        });
    };

    return (
        <div className='grid gird-cols-1 lg:grid-cols-2 bg-yellow-400'>
            <div className='flex items-center md:p-6'>
                <div className='flex flex-col font-semibold items-center lg:items-start md:px-32'>
                    <Link onClick={scrollToTop} to="/">
                        <img src={logo} alt="Tiny Toes Logo" className="w-auto h-auto transition-all ease-in-out duration-300 transform hover:scale-110" />
                    </Link>
                    <Link onClick={scrollToTop} to="/about-us">About Us</Link>
                    <Link onClick={scrollToTop} to="/our-curriculum">Our Curriculum</Link>
                    <Link onClick={scrollToTop} to="/registration-corner">Registration Corner</Link>
                    <Link onClick={scrollToTop} to="/knowledge-area">Knowledge Area</Link>
                    <Link onClick={scrollToTop} to="/gallery">Gallery</Link>
                    <Link onClick={scrollToTop} to='/privacy-policy'>Privacy Policy</Link>
                    <Link onClick={scrollToTop} to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={smiley} alt="Footer Pic" className=' md:px-28 p-2 lg:w-[80%]' />
            </div>
        </div>
    );
};

export default Footer;
