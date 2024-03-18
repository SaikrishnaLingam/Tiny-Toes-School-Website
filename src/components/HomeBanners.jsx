import React, { useState, useEffect } from 'react';

import banner1 from '../assests/banners/1.png';
import banner2 from '../assests/banners/2.png';
import banner3 from '../assests/banners/3.png';

const HomeBanners = () => {
    const [counter, setCounter] = useState(0);
    const autoSlide = true; 
    
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
        <section className="w-full h-auto">
            <div className="overflow-hidden relative">
                <div className="flex" style={{ transform: `translateX(-${counter * 100}%)` }}>
                    {bannerImages.map((imageUrl, index) => (
                        
                        <img key={index} src={imageUrl} alt={`Banner ${index + 1}`} className="w-full" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBanners;
