import React from 'react';
import RegisterButton from './RegisterButton';
import principalImg from '../assests/imgs/principal.png'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import withScrollAnimation from './withScrollAnimation';

const Principal = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional - adds smooth scrolling animation
        });
    };
    return (
        <div className='bg-slate-100 flex flex-col md:grid md:grid-cols-2 md:gap-4 md:pt-10'>
            <div>
                <img src={principalImg} alt="Principal" className='hidden md:block pb-6 w-auto h-auto md:pl-10 xl:ml-10' />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-end pt-3'>
                    <Link to="/registration-corner">
                        <RegisterButton id={2} />
                    </Link>
                </div>
                <div className='flex md:items-start flex-col items-center'>
                    <h1 className='font-semibold text-lg md:text-2xl lg:text-3xl pb-4'>Nisha Rani</h1>
                    <h2 className='text-lg md:text-xl pb-4'>Principal, TinyToes Playschool</h2>
                    <img src={principalImg} alt="Principal" className='md:hidden block p-10' />
                    <p className='pt-4 xl:mr-48 xl:pr-32 text-md p-4 md:p-0 lg:text-lg  '>For 14 years, TinyToes Play School has been a nurturing haven for tiny stars, prioritizing safety, holistic learning, and lifelong skills. Our journey emphasizes a secure, joyful environment where children flourish. Rigorous safety measures ensure a protected space for exploration and growth. Our dynamic curriculum fosters curiosity and a love for learning, while life skills and personality development are integral parts of education. With a warm, homely atmosphere and disciplined teachers, we foster a sense of community and excellence. Join us at TinyToes, where every child's journey is celebrated, and each tiny star shines brightly with promise and potential.</p>
                    <Link to="/contact-us">
                        <button onClick={scrollToTop} className='flex rounded-xl bg-yellow-300 my-3 p-3 lg:my-6 lg:p-6 items-center justify-center text-sm lg:text-2xl md:text-lg'>
                            Visit Our School &nbsp; <FaPlayCircle size={36} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withScrollAnimation(Principal);