import React from 'react'
import { hoverData } from './HoverData';
import HoverCard from './HoverCard';

const HoverComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            {hoverData.map((item, index) => (
                <HoverCard key={index} data={item} />
            ))}
        </div>
    );
}

export default HoverComponent