import React from 'react'
import teddy1 from '../../assests/about/teddy1.jpeg'
import teddy2 from '../../assests/about/teddy2.jpeg'
import teddy3 from '../../assests/about/teddy3.jpeg'

const Purple = () => {
    return (
        <div className='bg-pink-800'>
            <h1 className='text-white font-semibold text-2xl md:text-3xl text-center pt-10'>Extraordinary Benefits of Being Associated with TinyToes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 md:px-10 lg:gap-10 lg:px-32 py-10'>
                <div className='flex flex-col items-center text-center justify-center'>
                    <img src={teddy1} alt="" className='rounded-full w-32 md:w-48'/>
                    <h2 className='text-white font-semibold md:font-bold text-lg'>Holistic Development</h2>
                    <p className='text-white'>TinyToes focuses on the holistic development of each child, nurturing not only academic excellence but also social, emotional, and physical well-being.</p>
                </div>
                <div className='flex flex-col items-center text-center justify-center'>
                    <img src={teddy2} alt="" className='rounded-full w-32 md:w-48'/>
                    <h2 className='text-white font-semibold md:font-bold text-lg'>Experienced Faculty</h2>
                    <p className='text-white'>Our team of educators comprises experienced professionals dedicated to fostering a love for learning and ensuring that every child receives the best possible education</p>
                </div>
                <div className='flex flex-col items-center text-center justify-center'>
                    <img src={teddy3} alt="" className='rounded-full w-32 md:w-48'/>
                    <h2 className='text-white font-semibold md:font-bold text-lg'>Innovative Learning</h2>
                    <p className='text-white'>We are at the forefront of educational innovation, constantly updating our curriculum to incorporate modern teaching techniques, technology, and research-driven practices.</p>
                </div>
            </div>
        </div>
    )
}

export default Purple