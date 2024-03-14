import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import logo from '../assests/imgs/logo.png';
import smiley from '../assests/imgs/simley.avif';

const Footer = ( {setPrivacyPolicy} ) => {
    return (
        <div className='grid gird-cols-1 md:grid-cols-2 bg-yellow-400'>
            <div className='flex items-center m-6'>
                <div className='flex flex-col font-semibold px-32'>
                    <img src={logo} alt="Tiny Toes Logo" className="w-auto h-auto" />
                    <Link to="/about-us">About Us</Link>
                    <Link to="/our-curriculum">Our Curriculum</Link>
                    <Link to="/registration-corner">Registration Corner</Link>
                    <Link to="/knowledge-area">Knowledge Area</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link onClick={() => setPrivacyPolicy(true)}>Privacy Policy</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={smiley} alt="Footer Pic" className='px-28'/>
            </div>
        </div>
    );
};

export default Footer;