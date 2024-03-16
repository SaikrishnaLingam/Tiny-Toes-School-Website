import React from 'react'
import CardComponent from './CardComponent'
import { kidData } from './ChildrenData'
import withScrollAnimation from '../withScrollAnimation'

const EducateChildren = () => {
    return (
        <div>
            <h1 className='text-center text-2xl md:text-4xl font-bold p-8'>Education for Your Children</h1>
            <div className='grid grid-cols-1 p-3 m-3 md:grid-cols-2 gap-10 pb-6 md:mx-3 lg:mx-16 xl:mx-44 2xl:mx-72'>
                {kidData.map((item, index) => (
                    <CardComponent key={index} index={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default withScrollAnimation(EducateChildren)