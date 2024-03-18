// import React from 'react'
// import celebrating from '../assests/imgs/14yrs.png'
// import ImageCarousel from './SliderHomePage/ImageCarousel'
// import { Link } from 'react-router-dom';
// import withScrollAnimation from './withScrollAnimation';

// const HomeSlider = () => {
//     return (
//         <div className='bg-pink-600 grid grid-cols-1 lg:grid-cols-3 justify-between pb-6'>
//             <div className='md:col-span-1 lg:pl-36 flex flex-col items-center lg:items-start'>
//                 <img src={celebrating} alt="14 Years" className='h-[250px]' />
//                 <h1 className='font-extrabold text-2xl lg:text-4xl text-white flex flex-col'>
//                     <span>STEP BY STEP,</span>
//                     <span>TINY TOES MAKE</span>
//                     <span>BIG IMPRESSIONS!</span>
//                 </h1>
//                 <h3 className='font-semibold text-md lg:text-xl text-white flex flex-col'>
//                     <span>YES, WE ARE OPEN</span>
//                     <span>FOR YOUR CHILDREN!</span>
//                 </h3>
//                 <Link to="/registration-corner">
//                     <button className='bg-yellow-300 my-4 mx-2 py-2 px-8 rounded-lg font-semibold text-xl'>
//                         ENROLL
//                     </button>
//                 </Link>
//             </div>
//             <div className='flex items-center justify-center lg:pr-4 md:col-span-2 '>
//                 {/* <img src={brushstrokegirl} alt="Brushstroke Girl" className='h-[89%] w-auto'/> */}
//                 <ImageCarousel />
//             </div>
//         </div>
//     )
// }

// export default withScrollAnimation(HomeSlider)


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assests/banners/1.png';
import banner2 from '../assests/banners/2.png';
import banner3 from '../assests/banners/3.png';
import withScrollAnimation from './withScrollAnimation';

const HomeBanners = () => {
    const [counter, setCounter] = useState(0);
    const autoSlide = true;
    const imageWidth = 100; // Width of each image in percent

    const bannerImages = [
        banner1,
        banner2,
        banner3
    ];

    const handleNextBanner = () => {
        setCounter(prevCounter => (prevCounter === bannerImages.length - 1 ? 0 : prevCounter + 1));
    };

    const handlePrevBanner = () => {
        setCounter(prevCounter => (prevCounter === 0 ? bannerImages.length - 1 : prevCounter - 1));
    };

    useEffect(() => {
        let intervalId;
        if (autoSlide) {
            intervalId = setInterval(() => {
                handleNextBanner();
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [autoSlide]);

    const handleDotClick = index => {
        setCounter(index);
    };

    return (
        <section className="w-full h-full">
            <Link to="/registration-corner">
            <div className="overflow-hidden relative" style={{ width: `${imageWidth}%` }}>
                <div className="flex" style={{ transform: `translateX(-${counter * imageWidth}%)` }}>
                    {bannerImages.map((imageUrl, index) => (
                            <img src={imageUrl} alt={`Banner ${index + 1}`} className="w-full h-full" />
                    ))}
                </div>
            </div>
            </Link>
        </section>
    );
};

export default withScrollAnimation(HomeBanners);