import React from 'react'
import HomeSlider from '../HomeSlider'
import UnleashPotential from '../UnleashPotential'
import EducateChildren from '../EducateChildren/EducateChildren'
import KnowldegeCorner from '../KnowldegeCorner'
import ab1 from '../../assests/about/ab1.png'
import ab2 from '../../assests/about/ab2.png'
import ab3 from '../../assests/about/ab3.png'
import ab4 from '../../assests/about/ab4.png'
import ab5 from '../../assests/about/ab5.png'
import ab6 from '../../assests/about/ab6.png'
import Purple from './Purple'
import withScrollAnimation from '../withScrollAnimation';

const AboutUs = () => {
    return (
        <div>
            <HomeSlider />

            <div className='md:px-8 lg:px-12 xl:px-24 py-8 flex items-center justify-center flex-col'>
                <div>
                    <div className='py-6 border-b-2'>
                        <h2 className='text-4xl'>About Us</h2>
                        <p className='text-md lg:text-lg pb-4'>Welcome to TinyToes, a haven for the tiniest minds to embark on a journey of playful learning and holistic development! At TinyToes, we understand the immense potential that lies within every child, and our playschool is designed to nurture and guide them through their early years, setting a strong foundation for a lifetime of curiosity and success.</p>
                        <div className='flex justify-center'>
                            <img src={ab1} alt="" />
                        </div>
                    </div>
                    <div className='px-3'>
                        <h1 className='text-xl lg:text-3xl py-1 md:py-3 lg:py-6'>Playful Learning at TinyToes: </h1>
                        <p className='text-md lg:text-lg pb-4'>At TinyToes, we believe in the power of play as a fundamental tool for learning. Our carefully curated programs integrate educational concepts seamlessly into engaging and fun activities. Through interactive games, creative play, and hands-on experiences, we stimulate the natural curiosity of young minds, fostering a love for learning from the very beginning.</p>
                        <p className='text-md lg:text-lg pb-4'>Our dedicated team of educators is committed to creating an environment where children are encouraged to explore, discover, and express themselves. Through play, children develop essential skills such as problem-solving, communication, and critical thinking, preparing them for the challenges that lie ahead.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>
                    <div className='items-center flex justify-center md:justify-start'>
                        <img src={ab2} alt="" />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-xl lg:text-3xl py-1 md:py-3 lg:py-6'>Modern Psychological Techniques:</h1>
                        <p className='text-md lg:text-lg pb-4'>TinyToes embraces modern psychological techniques to understand and cater to the unique needs of each child. We recognize that every child is an individual with their own strengths, interests, and pace of development. Our approach involves observing and understanding each child's behavior, ensuring a personalized and supportive learning experience.</p>
                        <p className='text-md lg:text-lg pb-4'>Our educators are trained in child psychology and utilize evidence-based strategies to create a positive and nurturing atmosphere. By incorporating modern psychological techniques, we aim to enhance emotional intelligence, resilience, and social skills in our young learners, empowering them to navigate the complexities of the world with confidence.</p>
                    </div>
                    <div className='block md:hidden items-center flex justify-center md:justify-start '>
                        <img src={ab3} alt="" />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-xl lg:text-3xl py-1 md:py-3 lg:py-6'>Age-Appropriate Curriculum: </h1>
                        <p className='text-md lg:text-lg pb-4'>TinyToes offers a thoughtfully designed curriculum tailored to the specific developmental stages of children aged 18 months to 5 years. Our curriculum focuses on age-appropriate activities that cater to the cognitive, emotional, and physical development of each child. From sensory play to early literacy and numeracy skills, every aspect is carefully integrated to provide a well-rounded learning experience.</p>
                    </div>
                    <div className='hidden md:block items-center flex justify-center  md:justify-start'>
                        <img src={ab3} alt="" />
                    </div>
                    <div className='items-center flex justify-center  md:justify-start'>
                        <img src={ab4} alt="" />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-xl lg:text-3xl py-1 md:py-3 lg:py-6'>Parental Involvement:</h1>
                        <p className='text-md lg:text-lg pb-4'>We believe in the importance of a strong partnership between parents and educators. At TinyToes, we keep parents actively involved in their child's learning journey through regular updates, parent-teacher conferences, and workshops. This collaborative approach ensures that the values and skills nurtured at TinyToes seamlessly extend into the home environment.</p>
                        <p className='text-md lg:text-lg pb-4'>Join us at TinyToes, where every day is a new adventure filled with laughter, learning, and the joy of discovery. Together, let's lay the foundation for a bright and promising future for your little one.</p>
                    </div>
                </div>
                <div>
                    <img src={ab5} alt="" className='py-6' />
                </div>
                <div className='px-3'>
                    <h1 className='text-xl lg:text-3xl py-1 md:py-3 lg:py-6'>Our 14-Year Commitment:</h1>
                    <p className='text-md lg:text-lg pb-4'>Over the past 14 years, TinyToes has remained steadfast in its commitment to providing a nurturing and inclusive learning environment. We have continuously evolved our teaching methodologies, incorporating the latest educational research and insights into our curriculum. The dedication of our experienced educators has been instrumental in maintaining a high standard of education and care.</p>
                    <p className='text-md lg:text-lg pb-4'>Our commitment extends beyond academics to the overall well-being of each child. TinyToes prioritizes creating a safe and supportive atmosphere where children feel valued and encouraged. We understand that every child is unique, and our commitment to individualized attention ensures that each child's potential is recognized and cultivated.</p>
                </div>
            </div>

            <Purple />

            <div className='grid grid-cols-2 items-center'>
                <img src={ab6} alt=""/>
                <div className='px-3'>
                    <h1 className='text-xl lg:text-3xl py-1 md:py-3 lg:py-6'>Parental Engagement: </h1>
                    <p className='text-md lg:text-lg pb-4'>TinyToes recognizes the crucial role of parents in a child's education. We encourage active involvement through regular communication, workshops, and events, creating a strong partnership between home and school.</p>
                    <p className='text-md lg:text-lg pb-4'>Community Involvement: TinyToes is not just a school; it's a community. We organize various events, community service projects, and collaborative activities that instill a sense of belonging and responsibility in our students.</p>
                </div>
            </div>

            <UnleashPotential />
            <EducateChildren />
            <KnowldegeCorner />
        </div>
    )
}

export default withScrollAnimation(AboutUs)