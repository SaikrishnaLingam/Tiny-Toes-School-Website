import React from 'react'
import ai1 from '../assests/imgs/ai1.jpg'
import ai2 from '../assests/imgs/ai2.jpg'

const ImageFlip = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 items-center'>
                <div className='flex justify-center'><img src={ai1} alt="" /></div>
                <div className='p-2 md:p-6 lg:p-10 lg:px-18'>
                    <h3 className='font-bold md:text-lg text-md'>Embrace the Colors of Learning:</h3>
                    <h1 className='font-bold text-xl md:text-3xl'>Where Every Journey Begins with TinyToes.</h1>
                    <p>In our school, Indian culture is celebrated through vibrant festivals, traditional arts, and values like respect, compassion, and unity. Students engage in cultural activities, learning classical dances, music, and languages, fostering a deep appreciation for their heritage. Through storytelling and historical insights, they understand the rich tapestry of Indian civilization, embracing diversity and harmony. We instill values of tolerance and inclusivity, encouraging students to honor their roots while embracing global perspectives. Indian culture forms the cornerstone of our educational ethos, empowering students to become culturally aware and socially responsible individuals in an interconnected world.</p>
                    <button className='bg-yellow-300 my-4 mx-2 py-2 px-8 rounded-lg text-xl'>Start Here</button>
                </div>
                <div className='block lg:hidden flex justify-center'><img src={ai2} alt="" /></div>
                <div className='p-2 md:p-6 lg:p-10 lg:px-18'>
                    <h3 className='font-bold md:text-lg text-md'>Personalized Pathways: </h3>
                    <h1 className='font-bold text-xl md:text-3xl'>Nurturing Every Student's Potential with Individualized Support and Care.</h1>
                    <p>At TinyToes Play School, children's safety is our top priority. We've meticulously designed our environment and procedures to ensure a secure and nurturing space where kids can thrive. From controlled access points to trained staff members, every measure is in place to safeguard our little ones. Our curriculum integrates safety education, empowering children with knowledge and skills to protect themselves. We foster open communication with parents, keeping them informed about safety protocols and encouraging their active involvement. At TinyToes, we believe that when children feel safe and secure, they can fully engage in the joy of learning and exploration, laying the foundation for a bright future.</p>
                    <button className='bg-yellow-300 my-4 mx-2 py-2 px-8 rounded-lg text-xl'>Start Here</button>
                </div>
                <div className='justify-center hidden flex lg:block'><img src={ai2} alt="" /></div>
            </div>
        </div>
    )
}

export default ImageFlip