import React from 'react'
import { hoverData } from './HoverData';
import HoverCard from './HoverCard';
import withScrollAnimation from '../withScrollAnimation';

const HoverComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 py-2 md:py-4 justify-center items-center h-screen md:px-3">
            {hoverData.map((item, index) => (
                <HoverCard key={index} data={item} />
            ))}
        </div>
    );
}

export default withScrollAnimation(HoverComponent)