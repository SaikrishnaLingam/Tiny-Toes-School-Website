// HoverCard.jsx
import React, { useState } from 'react';

const HoverCard = ({ data }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div
            className="relative overflow-hidden cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <img src={data.hoverPic} alt={data.title} className="w-full h-full object-cover" />
            <div className={`absolute bottom-0 left-0 right-0 p-4 ${data.hoverColor} ${hovered ? 'bg-opacity-95' : 'bg-opacity-85'} ${hovered ? 'h-full' : 'h-1/3 2xl:h-1/4'} transition-all duration-300 ease-in-out`}>
                <h2 className="text-white text-lg md:text-xl font-semibold md:pb-2">{data.title}</h2>
                {hovered && (
                    <div className={`text-white transition-opacity duration-500 delay-300 text-sm md:text-md`}>
                        <p>{data.popup}</p>
                    </div>
                )}
                <p className={`text-white transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>{data.content}</p>
            </div>
        </div>
    );
};

export default HoverCard;