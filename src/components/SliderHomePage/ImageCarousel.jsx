import React, { useState, useEffect } from 'react';
import './carousel.css';
import brushstrokegirl from '../../assests/imgs/brushstroke-girl.png'
import boy1 from '../../assests/imgs/little boy 1.jpg'
import boy2 from '../../assests/imgs/little boy 2.jpg'
import girl1 from '../../assests/imgs/little girl 1.jpg'

const ImageCarousel = () => {
    const [counter, setCounter] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true); // Automatically set to true
    
    const carouselImages = [
        brushstrokegirl,
        boy1,
        girl1,
        boy2,
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
        <section className="carousel">
            <div className="carousel_slider">
                <div className="content_inner_slider" style={{ transform: `translateX(-${counter * 100}%)` }}>
                    {carouselImages.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt="" className="img p-10" />
                    ))}
                </div>
                <button className="prev_button" onClick={handlePrevImage}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button className="next_button" onClick={handleNextImage}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
            <ul className="dots">
                {carouselImages.map((_, index) => (
                    <li key={index} className={`dot ${index === counter ? 'active' : ''}`} onClick={() => handleDotClick(index)}></li>
                ))}
            </ul>
        </section>
    );
};

export default ImageCarousel;