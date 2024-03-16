import React from 'react'
import img1 from '../assests/unleashpotentialImgs/img1.png'
import img2 from '../assests/unleashpotentialImgs/img2.png'
import img3 from '../assests/unleashpotentialImgs/img3.png'
import img4 from '../assests/unleashpotentialImgs/img4.png'
import img5 from '../assests/unleashpotentialImgs/img5.png'
import img6 from '../assests/unleashpotentialImgs/img6.png'
import withScrollAnimation from './withScrollAnimation';

const UnleashPotential = () => {
    return (
        <div className='bg-teal-300'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='font-semibold text-lg mt-2 md:mt-9'>Unleashing Potential:</h3>
                <div className='font-extrabold md:font-bold text-lg md:text-4xl flex flex-col items-center'>
                    <span>Where Learning Extends Beyond </span>
                    <span>the Classroom Through Enriching </span>
                    <span>Curricular Activities.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-8 md:p-16 lg:px-36'>
                <div className='flex flex-col items-center justify-center'>
                    <div> <img src={img1} alt="img1" /> </div>
                    <div><span className='font-bold'>Art and Craft:</span> Encouraging creativity through painting, drawing, sculpting, and other hands-on activities.</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div> <img src={img2} alt="img2" /> </div>
                    <div><span className='font-bold'>Music and Dance:</span> Exploring different musical instruments, singing, and learning various dance forms.</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div> <img src={img3} alt="img3" /> </div>
                    <div><span className='font-bold'>Sports and Fitness:</span> Introducing children to basic sports skills, team games, and physical activities to promote a healthy lifestyle.</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div> <img src={img4} alt="img4" /> </div>
                    <div><span className='font-bold'>Community Service:</span> Inculcating values of empathy and social responsibility through volunteer projects and community outreach initiatives.</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div> <img src={img5} alt="img5" /> </div>
                    <div><span className='font-bold'>Yoga and Meditation:</span> Teaching relaxation techniques and mindfulness practices to enhance emotional </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div> <img src={img6} alt="img6" /> </div>
                    <div className='pb-4'><span className='font-bold'>Gardening and Nature Walks:</span> Instilling appreciation for nature through gardening projects and outdoor exploration.</div>
                </div>
            </div>
        </div>
    )
}

export default withScrollAnimation(UnleashPotential)