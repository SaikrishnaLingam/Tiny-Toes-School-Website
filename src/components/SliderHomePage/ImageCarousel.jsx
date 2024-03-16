import React, { useState, useEffect } from 'react';
// import './carousel.css';
import slider1 from '../../assests/imgs/slider1.png'
import slider2 from '../../assests/imgs/slider2.png'
import slider3 from '../../assests/imgs/slider3.png'
import slider4 from '../../assests/imgs/slider4.png'


const ImageCarousel = () => {
    const [counter, setCounter] = useState(0);
    const autoSlide = true; 
    
    const carouselImages = [
        slider1,
        slider2,
        slider3,
        slider4
    ];

    const handleNextImage = () => {
        setCounter((prevCounter) => (prevCounter === carouselImages.length - 1 ? 0 : prevCounter + 1));
    };

    const handlePrevImage = () => {
        setCounter((prevCounter) => (prevCounter === 0 ? carouselImages.length - 1 : prevCounter - 1));
    };

    useEffect(() => {
        let intervalId;
        if (autoSlide) {
            intervalId = setInterval(() => {
                handleNextImage();
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [autoSlide]);

    const handleDotClick = (index) => {
        setCounter(index);
    };

    return (
        <section className="lg:w-[69%] xl:w-[65%] md:w-3/4 2xl:w-1/2 h-full flex flex-col relative">
            <div className="w-full h-full overflow-hidden relative">
                <div className="w-full h-full flex" style={{ transform: `translateX(-${counter * 100}%)` }}>
                    {carouselImages.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt="" className="w-full h-full lg:object-cover" />
                    ))}
                </div>
                {/* <button className="absolute top-0 left-0" onClick={handlePrevImage}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button className="absolute top-0 right-0" onClick={handleNextImage}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button> */}
            </div>
            <ul className="flex ml-auto">
                {carouselImages.map((_, index) => (
                    <li key={index} className={`w-4 h-4 rounded-full mx-2 cursor-pointer bg-yellow-500`} onClick={() => handleDotClick(index)}></li>
                ))}
            </ul>
        </section>
    );
};

export default ImageCarousel;