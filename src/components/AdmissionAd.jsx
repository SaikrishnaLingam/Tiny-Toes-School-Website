import React from 'react'
import admission from '../assests/imgs/AdmissionAlert.png'
import yellowBg from '../assests/imgs/yellowBg.png'

const AdmissionAd = () => {
    return (
        <div style={{ backgroundImage: `url(${yellowBg})` }} className='bg-no-repeat bg-cover flex flex-col md:flex-row items-center md:justify-between py-8 px-20 md:px-36 lg:px-56'>
            <div className='mb-4 md:mb-0'>
                <img src={admission} alt="admission" />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col text-5xl font-extrabold italic text-blue-500'>
                    <span>Discover</span>
                    <span>the Magic</span>
                    <span>at TinyToes!</span>
                </div>
                <div>
                <button className='bg-white flex justify-center md:justify-start md:text-lg md:px-10 px-3 py-2 rounded-lg mt-8 shadow-[8px_8px_0px_0px_rgba(44,37,247)] md:w-auto w-full'>Start Here</button>
                </div>
            </div>
        </div>
    )
}

export default AdmissionAd