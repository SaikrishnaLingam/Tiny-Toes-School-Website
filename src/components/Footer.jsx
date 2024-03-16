import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import logo from '../assests/imgs/logo.png';
import smiley from '../assests/imgs/smiley.jpeg';

const Footer = ( {setPrivacyPolicy} ) => {
    return (
        <div className='grid gird-cols-1 lg:grid-cols-2 bg-yellow-400'>
            <div className='flex items-center md:p-6'>
                <div className='flex flex-col font-semibold items-center lg:items-start md:px-32'>
                    <img src={logo} alt="Tiny Toes Logo" className="w-auto h-auto" />
                    <Link to="/about-us">About Us</Link>
                    <Link to="/our-curriculum">Our Curriculum</Link>
                    <Link to="/registration-corner">Registration Corner</Link>
                    <Link to="/knowledge-area">Knowledge Area</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={smiley} alt="Footer Pic" className='hidden md:block md:px-28 p-2 lg:w-[80%]'/>
            </div>
        </div>
    );
};

export default Footer;