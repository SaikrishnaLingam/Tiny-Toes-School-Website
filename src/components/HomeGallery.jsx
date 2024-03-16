import React from 'react';
import gallery1 from '../assests/gallery/gallery1.jpeg';
import gallery2 from '../assests/gallery/gallery2.jpeg';
import gallery3 from '../assests/gallery/gallery3.jpeg';
import gallery4 from '../assests/gallery/gallery4.jpeg';
import gallery5 from '../assests/gallery/gallery5.jpeg';
import gallery6 from '../assests/gallery/gallery6.jpeg';
import { Link } from 'react-router-dom';
import withScrollAnimation from './withScrollAnimation';

const HomeGallery = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional - adds smooth scrolling animation
        });
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold md:text-5xl text-3xl py-6'>Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center px-4 lg:px-56'>
                <div className='hidden md:block lg:block'>
                    <img src={gallery1} alt="" />
                </div>
                <div className='hidden md:block lg:block'>
                    <img src={gallery2} alt="" />
                </div>
                <div>
                    <img src={gallery3} alt="" />
                </div>
                <div>
                    <img src={gallery4} alt="" />
                </div>
                <div className='hidden lg:block'>
                    <img src={gallery5} alt="" />
                </div>
                <div className='hidden lg:block'>
                    <img src={gallery6} alt="" />
                </div>
            </div>
            <div>
                <Link to='/gallery'>
                    <button onClick={scrollToTop} className='bg-yellow-300 my-4 mx-2 py-2 px-8 rounded-lg font-semibold text-xl'>
                        View More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default withScrollAnimation(HomeGallery);