import React, { useState } from 'react';
import { testimonials } from './testData';
import withScrollAnimation from '../withScrollAnimation';

const Testimonial = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [filter, setFilter] = useState("all");
    
    const handleNextSlide = () => {
        let newIndex = activeSlideIndex;
        while (true) {
            newIndex = newIndex === testimonials.length - 1 ? 0 : newIndex + 1;
            if (filter === 'all' || testimonials[newIndex].title.toLowerCase() === filter) {
                setActiveSlideIndex(newIndex);
                break;
            }
        }
    };
    
    const handlePrevSlide = () => {
        let newIndex = activeSlideIndex;
        while (true) {
            newIndex = newIndex === 0 ? testimonials.length - 1 : newIndex - 1;
            if (filter === 'all' || testimonials[newIndex].title.toLowerCase() === filter) {
                setActiveSlideIndex(newIndex);
                break;
            }
        }
    };
    
    
    const handleFilterChange = (title) => {
        setFilter(title);
        const categoryIndex = testimonials.findIndex(
            (testimony) => testimony.title.toLowerCase() === title
        );
        setActiveSlideIndex(categoryIndex !== -1 ? categoryIndex : 0);
    };

    return (
        <div className="relative bg-orange-600">
            {/* Filter to show testimonials */}
            <div className="grid md:grid-cols-4 lg:gap-4 md:gap-3 grid-cols-2 pt-4">
                <button
                    className={`font-bold text-lg md:text-2xl text-white hover:underline ${filter === "all" ? "text-yellow-400 underline" : ""}`}
                    onClick={() => handleFilterChange("all")}
                >
                    All
                </button>
                <button
                    className={`font-bold text-lg md:text-2xl text-white hover:underline ${filter === "parent" ? "text-yellow-400 underline" : ""}`}
                    onClick={() => handleFilterChange("parent")}
                >
                    Parent Corner
                </button>
                <button
                    className={`font-bold text-lg md:text-2xl text-white hover:underline ${filter === "alumni" ? "text-yellow-400 underline" : ""}`}
                    onClick={() => handleFilterChange("alumni")}
                >
                    Student Alumni
                </button>
                <button
                    className={`font-bold text-lg md:text-2xl text-white hover:underline ${filter === "teacher" ? "text-yellow-400 underline" : ""}`}
                    onClick={() => handleFilterChange("teacher")}
                >
                    Teacher Corner
                </button>
            </div>
            
            {/* Testimonial Slider */}
            <div className='flex justify-between items-center'>
                {/* Prev Button */}
                <button className="p-2 text-yellow-400 hover:bg-opacity-75 focus:outline-none" onClick={handlePrevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 md:h-20 md:w-20">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Testimonial Content */}
                <div className="overflow-x-hidden h-[250px] lg:h-[300px] relative flex justify-center items-center">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={
                                (filter === "all" || testimonial.title.toLowerCase() === filter) &&
                                    index === activeSlideIndex
                                    ? "block w-full  transition-all duration-500 ease-in-out"
                                    : "hidden w-full  transition-all duration-500 ease-in-out"
                            }
                        >
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-xs px-2 md:text-md lg:text-lg font-medium text-white lg:px-24">{testimonial.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button className="p-2 text-yellow-400 hover:bg-opacity-75 focus:outline-none" onClick={handleNextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 md:h-20 md:w-20">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default withScrollAnimation(Testimonial);